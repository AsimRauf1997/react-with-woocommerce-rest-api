/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/actions/productAction";
import Loader from "react-spinners/ClipLoader";
import ProductItem from "../../components/product/ProductItem";

const ProductPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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
        <>
          {products
            .filter(
              (p) =>
                p.categories.filter((c) => c.name === "edibles") &&
                p.acf.type === "naturals"
            )
            .map((product) => (
              <ProductItem key={product.id} data={product} flag={"product"} />
            ))}
        </>
      )}
    </>
  );
};

export default ProductPage;
