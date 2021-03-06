/* eslint-disable no-lone-blocks */
/* eslint-disable no-unreachable */
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import CartItem from "../../components/cart/CartItem";
import { clearCart, removeFromCart } from "../../store/actions/cartAction";
import { addOrder } from "../../store/actions/orderAction";
import { getCraftProducts } from "../../store/actions/productAction";
import { unitPriceCalculation, unitTaxCalculation } from "../../utils/common";
const _ = require("lodash");

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const { loading, success } = useSelector((state) => state.ordersList);
  console.log(success);
  // console.log(craftProducts);
  const [show, setShow] = useState(false);
  const [paymentType, setPaymentType] = useState("cod");
  const [checkBox, setCheckBox] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shipCountry, setShipCountry] = useState("");
  const [shipCity, setShipCity] = useState("");
  const [shipProvince, setShipProvince] = useState("");
  const [shipAddress, setShipAddress] = useState("");
  const [billCountry, setBillCountry] = useState("");
  const [billCity, setBillCity] = useState("");
  const [billProvince, setBillProvince] = useState("");
  const [billAddress, setBillAddress] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let shippingDetails = {
    first_name: name,
    address_1: shipAddress,
    city: shipCity,
    state: shipProvince,
    country: shipCountry,
    email: email,
  };
  let billingDetails = !checkBox
    ? {
        first_name: name,
        address_1: billAddress,
        city: billCity,
        state: billProvince,
        country: billCountry,
        email: email,
      }
    : shippingDetails;
  const handleEvent = (e, flag) => {
    switch (flag) {
      case "name":
        return setName(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "scountry":
        return setShipCountry(e.target.value);
      case "scity":
        return setShipCity(e.target.value);
      case "sadd":
        return setShipAddress(e.target.value);
      case "spro":
        return setShipProvince(e.target.value);
      case "bcountry":
        return setBillCountry(e.target.value);
      case "bcity":
        return setBillCity(e.target.value);
      case "badd":
        return setBillAddress(e.target.value);
      case "bpro":
        return setBillProvince(e.target.value);
      default:
        return null;
    }
  };
  const handleRadioButton = (e) => {
    console.log(e.target);
    setPaymentType(e.target.value);
  };
  const handleCheckBox = (e) => {
    console.log(e.target);
    setCheckBox(!checkBox);
  };
  // console.log("Shipping Details", shippingDetails);
  // console.log("Billing Details", billingDetails);
  const groupByCategory = cartItem.reduce((group, product) => {
    group[product.id ? product.id : product._id] =
      group[product.id ? product.id : product._id] ?? [];
    group[product.id ? product.id : product._id].push(product);
    return group;
  }, {});
  var processedCartItem = Object.keys(groupByCategory).map((key, index) => {
    groupByCategory[key][0].quantity = groupByCategory[key].length;
    return groupByCategory[key][0];
  });
  let TotalExclTax = 0;
  let TotalTax = 0;
  cartItem.forEach((element) => {
    {
      element.isDiscountAvailable
        ? (TotalExclTax += unitPriceCalculation(
            element.discountedPrice,
            element.saleTax
          ))
        : // unitPriceCalculation(packPrice[0].price, packPrice[0].SaleTax)
          (TotalExclTax += unitPriceCalculation(
            element.price,
            element.saleTax ? element.saleTax : 0
          ));
      // unitPriceCalculation(packPrice[0].price, packPrice[0].SaleTax)
    }
    {
      element.isDiscountAvailable
        ? (TotalTax += unitTaxCalculation(
            element.discountedPrice,
            element.saleTax
          ))
        : (TotalTax += unitTaxCalculation(
            element.price,
            element.saleTax ? element.saleTax : 0
          ));
    }
  });
  // console.log("groupByCategory", groupByCategory);
  // const products = craftProducts
  //   .filter((c, index) => c.is_featured_product === true)
  //   .filter((_, index) => index < 1)
  //   .map((data) => data);
  // const abc = Object.assign({}, products);
  // console.log(abc, products);
  const line_items = processedCartItem.map((x) => ({
    name: x.name,
    product_id: x.id ? x.id : x._id,
    quantity: parseInt(x.quantity),
    sku: x.sku,
    price: x.price,
    images: x.images,
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      billing: billingDetails,
      shipping: shippingDetails,
      line_items: [...line_items],
      payment_method: paymentType,
      date_created: new Date(),
      date_created_gmt: new Date(),
      prices_include_tax: true,
    };
    console.log(object);
    dispatch(addOrder(JSON.stringify(object)));
    toast(success);
    setTimeout(() => {
      setShow(false);
      dispatch(clearCart());
    }, 5000);
  };
  return (
    <Container className='mt-4'>
      <h1 className='txt-color'>Order Summary</h1>
      <div
        style={{
          marginTop: 40,
        }}
      >
        <CartItem
          handleShow={handleShow}
          processedCartItem={processedCartItem}
        />
      </div>

      {/* Checkout Modal */}
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <ListGroup>
              <h3>Contact Information</h3>
              <Row>
                <Col>
                  <FormGroup>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter First Name'
                      value={name}
                      onChange={(e) => handleEvent(e, "name")}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter Email Here'
                      value={email}
                      onChange={(e) => handleEvent(e, "email")}
                    ></Form.Control>
                  </FormGroup>
                </Col>
              </Row>
            </ListGroup>

            <ListGroup className='mt-3'>
              <h3> Shipping Address</h3>
              <Row>
                <Col>
                  <FormGroup>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Country Here'
                      value={shipCountry}
                      onChange={(e) => handleEvent(e, "scountry")}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter City Here'
                      value={shipCity}
                      onChange={(e) => handleEvent(e, "scity")}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter Address Here'
                      value={shipAddress}
                      onChange={(e) => handleEvent(e, "sadd")}
                    ></Form.Control>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Form.Label>State/Province</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter State Here'
                      value={shipProvince}
                      onChange={(e) => handleEvent(e, "spro")}
                    ></Form.Control>
                  </FormGroup>
                </Col>
              </Row>
            </ListGroup>
            <Col className='mt-2'>
              <FormGroup>
                <Form.Check
                  type={"checkbox"}
                  checked={checkBox}
                  onChange={handleCheckBox}
                  label='Same as Shipping'
                  id='same'
                />
              </FormGroup>
            </Col>
            {!checkBox && (
              <ListGroup className='mt-3'>
                <h3> Billing Address</h3>
                <Row>
                  <Col>
                    <FormGroup>
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Country Here'
                        value={billCountry}
                        onChange={(e) => handleEvent(e, "bcountry")}
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter City Here'
                        value={billCity}
                        onChange={(e) => handleEvent(e, "bcity")}
                      ></Form.Control>
                    </FormGroup>
                  </Col>

                  <Col>
                    <FormGroup>
                      <Form.Label>Billing Address</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Address Here'
                        value={billAddress}
                        onChange={(e) => handleEvent(e, "badd")}
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>State/Province</Form.Label>
                      <Form.Control
                        type='email'
                        placeholder='Enter State Here'
                        value={billProvince}
                        onChange={(e) => handleEvent(e, "bpro")}
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
              </ListGroup>
            )}

            <Row className='mt-3'>
              <h3> Payment Options</h3>
              <Col>
                <FormGroup>
                  <Form.Check
                    checked={paymentType === "cod"}
                    onChange={handleRadioButton}
                    value='cod'
                    type='radio'
                    label=' Cash on Delivery'
                    id='cod'
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className='mt-2'>
              <Col>
                <FormGroup>
                  <Form.Check
                    checked={paymentType === "Credit Card"}
                    onChange={handleRadioButton}
                    value='Credit Card'
                    type='radio'
                    label='Credit Card'
                    id='Credit Card'
                  />
                </FormGroup>
              </Col>
            </Row>
            {paymentType === "Credit Card" && (
              <>
                <Row className='mt-2'>
                  <Col>
                    <FormGroup>
                      <Form.Label>Name on Card</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Name Here'
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className='mt-2'>
                  <Col>
                    <FormGroup>
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter Card Number Here'
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>Expiry</Form.Label>
                      <Form.Control
                        type='date'
                        placeholder='Enter Card Number Here'
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Form.Label>CVC</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Enter CVC Here'
                      ></Form.Control>
                    </FormGroup>
                  </Col>
                </Row>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button className='btns' onClick={handleSubmit} variant='primary'>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Confirm Order</span>
              {loading && (
                <span
                  style={{
                    marginLeft: 5,
                  }}
                >
                  <Loader size={20} color={"white"} />
                </span>
              )}
            </div>
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CartPage;
