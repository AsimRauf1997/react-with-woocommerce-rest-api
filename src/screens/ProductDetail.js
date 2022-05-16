/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "react-spinners/ClipLoader";
import BackButton from "../components/BackButton";
import { getSingleProduct } from "../store/actions/productAction";
const ProductDetail = () => {
  const params = useParams();
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const { product, loading, error } = productDetail;
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [dispatch, params.id]);
  console.log("Product Detail Page product: ", product, loading, error);
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40vw",
                backgroundColor: "gray",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <h3>
                Product Title: <strong>{product.name}</strong>
              </h3>

              <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
