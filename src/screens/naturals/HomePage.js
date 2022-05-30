/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/actions/productAction";

const HomePage = () => {
  //   const dispatch = useDispatch();
  //   const productList = useSelector((state) => state.productList);
  //   const { products, loading } = productList;
  //   useEffect(() => {
  //     dispatch(getAllProducts());
  //   }, []);
  const categoris = [
    {
      id: 1,
      title: "Edibles",
      slug: "edibles",
      image_Url:
        "https://images.unsplash.com/photo-1597093218359-06440f36cb6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Skin Care",
      slug: "skin-care",
      image_Url:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Aromatherapy",
      slug: "aroma",
      image_Url:
        "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Gift Boxes",
      slug: "gift",
      image_Url:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2040&q=80",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: 20,
            width: "100%",
            padding: 10,
          }}
        >
          {categoris.map((c) => (
            <div>
              <a
                href={`/natural/${c.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <img
                  src={c.image_Url}
                  alt='Image'
                  width={200}
                  style={{
                    borderRadius: 20,
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                  }}
                >
                  {c.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
