/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "react-spinners/ClipLoader";
import BackButton from "../components/BackButton";
import ProductImages from "../components/product/ProductImages";
import { addToCart } from "../store/actions/cartAction";
import { getSingleProduct } from "../store/actions/productAction";
const ProductDetail = () => {
  const params = useParams();
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, loading } = productDetail;
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [dispatch, params.id]);
  const handleAddtoCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <BackButton />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          <>
            <Card style={{ width: "25rem" }}>
              {product.images &&
                product.images.map((c) => <Card.Img src={c.src} />)}
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}
                ></Card.Text>
                <Card.Text>{product.price}: PKR</Card.Text>
                <hr />
                <Button variant='outline-primary' onClick={handleAddtoCart}>
                  {" "}
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
