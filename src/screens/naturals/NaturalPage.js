/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/actions/productAction";
import Loader from "react-spinners/ClipLoader";
import ProductItem from "../../components/product/ProductItem";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const NaturalPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(products);
  return (
    <>
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
            .filter(
              (p) => p.acf.category === "naturals" && p.acf.subcategory === slug
            )
            .map((product) => (
              <Col>
                <ProductItem key={product.id} data={product} flag={"product"} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default NaturalPage;
