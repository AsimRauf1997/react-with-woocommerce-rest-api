/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Col, Row, Tabs, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import ProductImages from "../components/product/ProductImages";
import { addToCart } from "../store/actions/cartAction";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import {
  getSingleCraftProduct,
  getSingleProduct,
} from "../store/actions/productAction";
import ProductTabs from "../components/ProductTabs";

const ProductDetail = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();

  const { craftProduct, loading } = useSelector(
    (state) => state.craftProductDetail
  );
  console.log(craftProduct, loading);

  useEffect(() => {
    dispatch(getSingleCraftProduct(params.id));
  }, [dispatch, params.id]);

  // const handleAddtoCart = () => {
  //   dispatch(addToCart(craftProduct, productQuantity));

  //   toast(`${craftProduct[0].name} Added to Cart`);
  //   //setProductQuantity(1);
  // };
  const handleAddtoCart = (data) => {
    for (let i = 0; i < productQuantity; i++) {
      dispatch(addToCart(data));
    }
    toast(`${craftProduct[0].name} Added to Cart`);

    setProductQuantity(1);
    // console.log("cartItem",useSelector((state) => state.CartItems))
  };

  return (
    <Container>
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Row className='mt-5'>
          {craftProduct?.map((data) => (
            <>
              <Col lg={2}>
                {data?.images.map((c) => (
                  <Row className='mt-2'>
                    <Col>
                      <Card style={{ width: "10vw" }}>
                        <Card.Img
                          src={process.env.REACT_APP_IMAGE_URL + c.url}
                          alt='Image'
                          width={5}
                        />
                      </Card>
                    </Col>
                  </Row>
                ))}
              </Col>
              <Col lg={4}>
                <Card style={{ width: "35vw" }}>
                  <Card.Img
                    src={process.env.REACT_APP_IMAGE_URL + data.images[0].url}
                    alt='Image'
                  />
                </Card>
              </Col>
              <Col lg={4}>
                <div
                  style={{
                    marginLeft: "25%",
                    width: "100%",
                  }}
                >
                  <Col
                    style={{
                      marginLeft: 10,
                      paddingLeft: 10,
                    }}
                  >
                    <h1>{data.name}</h1>
                    <h5>SKU: {data.sku}</h5>
                    <h2>PKR: {data.price}</h2>
                    <hr />
                    <div>
                      <h3>Product Description</h3>
                      <p>{data.description.substring(34, 159)}</p>
                    </div>
                    <hr />
                    <div>
                      <Col lg={4} className={"productPageQuantityBox"}>
                        <h5>Quantity</h5>
                        <Row className={"productPageQuantityinc"}>
                          <Col lg={4} md={4} sm={4} xs={4}>
                            <span
                              className={"cursor"}
                              onClick={() =>
                                productQuantity !== 1
                                  ? setProductQuantity(productQuantity - 1)
                                  : setProductQuantity(productQuantity)
                              }
                            >
                              -
                            </span>
                          </Col>
                          <Col lg={4} md={4} sm={4} xs={4}>
                            <span>{productQuantity}</span>
                          </Col>
                          <Col lg={4} md={4} sm={4} xs={4}>
                            <span
                              className={"cursor"}
                              onClick={() =>
                                setProductQuantity(productQuantity + 1)
                              }
                            >
                              +
                            </span>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                    <Button
                      style={{
                        width: "100%",
                        marginTop: 10,
                        backgroundColor: "#aedaa0",
                        border: "none",
                      }}
                      onClick={() => handleAddtoCart(data)}
                    >
                      Add To Cart
                    </Button>
                  </Col>
                </div>
              </Col>
              <Row className='mt-3 p-4'>
                <Col>
                  <ProductTabs selectedProduct={data} />
                </Col>
              </Row>
            </>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
