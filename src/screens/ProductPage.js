/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/actions/productAction";
import ProductItem from "../components/product/ProductItem";
import Loader from "react-spinners/ClipLoader";
import { Col, Container, Row } from "react-bootstrap";

const ProductPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Container>
      {loading ? (
        <div
          style={{
            top: "50%",
            left: "50%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Row>
          {products
            .filter((p) => p.acf.type === "crafts")
            .map((product) => (
              <Row>
                <ProductItem key={product.id} data={product} flag={"product"} />
              </Row>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductPage;
