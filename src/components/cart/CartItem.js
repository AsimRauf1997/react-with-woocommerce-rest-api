/* eslint-disable no-lone-blocks */
/* eslint-disable no-undef */
import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormLabel,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { removeFromCart } from "../../store/actions/cartAction";
import { FaTrash } from "react-icons/fa";
import { unitPriceCalculation, unitTaxCalculation } from "../../utils/common";
import { Link } from "react-router-dom";

const _ = require("lodash");
const CartItem = ({ handleShow, processedCartItem }) => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);

  const handleRemove = (id, name) => {
    console.log(id);
    dispatch(removeFromCart(id));
    toast(`${name} Removed From Cart`);
  };
  //let grouppedItems = _.groupBy(cartItem, "_id");

  let TotalExclTax = 0;
  let TotalTax = 0;
  const columns = [
    {
      name: "#",
      center: true,
      cell: function CartItem(row, index) {
        return <> {++index}</>;
      },
      width: "50px",
    },
    {
      width: "30",
      name: "Image",
      center: true,
      cell: function CartItem(row, index) {
        return (
          <Row>
            <Col>
              <Image
                src={
                  row.images[0].url
                    ? process.env.REACT_APP_IMAGE_URL + row.images[0].url
                    : row.images[0].src
                }
                width={45}
              />
            </Col>
          </Row>
        );
      },
    },
    {
      name: "Item",
      center: true,
      cell: function CartItem(row) {
        return (
          <Row>
            <Col
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
                to={`/productDetail/${row._id}`}
              >
                {row.name}
              </Link>{" "}
            </Col>
          </Row>
        );
      },
    },

    {
      name: "Unit Price",
      center: true,
      cell: function cartItem(row, index) {
        return (
          <Row>
            <Col>
              {unitPriceCalculation(row.price, row.saleTax ? row.saleTax : 0)}
            </Col>
          </Row>
        );
      },
    },
    {
      name: "Unit Tax",
      center: true,
      cell: function cartItem(row) {
        return (
          <Row>
            <Col>
              {unitTaxCalculation(row.price, row.saleTax ? row.saleTax : 0)}(
              {row.saleTax}%)
            </Col>
          </Row>
        );
      },
    },
    {
      name: "Product Price",
      center: true,
      cell: function cartItem(row) {
        return (
          <Row>
            <Col>
              {unitTaxCalculation(row.price, row.saleTax ? row.saleTax : 0) +
                unitPriceCalculation(row.price, row.saleTax ? row.saleTax : 0)}
            </Col>
          </Row>
        );
      },
    },
    {
      name: "Total Price",
      center: true,
      cell: function cartItem(row) {
        return (
          <Row>
            <Col>
              {(unitTaxCalculation(row.price, row.saleTax ? row.saleTax : 0) +
                unitPriceCalculation(
                  row.price,
                  row.saleTax ? row.saleTax : 0
                )) *
                row.quantity}
            </Col>
          </Row>
        );
      },
    },
    {
      name: "Quantity",
      center: true,
      cell: function cartItem(row) {
        return (
          <Row>
            <Col>{row.quantity}</Col>
          </Row>
        );
      },
    },
    {
      name: "",
      center: true,
      cell: function CartItem(row) {
        return (
          <Row>
            <Col>
              <Button
                style={{
                  borderRadius: "100%",
                }}
                variant='danger'
                onClick={() =>
                  handleRemove(row._id ? row._id : row.id, row.name)
                }
              >
                <FaTrash size={15} />
              </Button>
            </Col>
          </Row>
        );
      },
    },
  ];
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

  let SubTotal = TotalExclTax + TotalTax;

  return (
    <>
      <Row className='p-2'>
        <Col>
          <DataTable
            columns={columns}
            data={processedCartItem}
            noDataComponent={<FormLabel>Your Cart is Empty !</FormLabel>}
          />
        </Col>
      </Row>
      {cartItem.length > 0 && (
        <Row className='mt-5 w-100'>
          <Col lg={8} />
          <Col className='w-100'>
            <Row>
              <Col lg={10}>Total(Excluding Tax):</Col>
              <Col>{TotalExclTax}</Col>
            </Row>
            <Row>
              <Col lg={10}>Total Tax:</Col>
              <Col>{TotalTax}</Col>
            </Row>
            <Row>
              <Col lg={10}>Shipping:</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col lg={10}>Total Amount:</Col>
              <Col>{SubTotal}</Col>
            </Row>
            <Row className='mt-4'>
              <Col lg={12}>
                <Button
                  variant='success'
                  style={{
                    backgroundColor: "#aedaa0",
                    border: "none",
                    width: "100%",
                  }}
                  onClick={handleShow}
                >
                  Proceed To Checkout
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CartItem;
