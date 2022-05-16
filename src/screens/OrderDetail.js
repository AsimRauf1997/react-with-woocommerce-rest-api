/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "react-spinners/ClipLoader";
import BackButton from "../components/BackButton";

const OrderDetail = () => {
  const params = useParams();

  const [singlePost, setSinglePost] = useState({});
  const URL = `http://localhost:8000/orders/${params.id}`;
  const getData = async () => {
    fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setSinglePost({ data: data, isLoaded: true }))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, [getData]);
  console.log(singlePost);
  const { data, isLoaded } = singlePost;
  return (
    <div>
      <BackButton to={"/orders"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Order Detail Page</h1>
        {isLoaded ? (
          <div
            style={{
              display: "flex",
              width: "30%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#cfcfcf",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <p>Order Number: {data.number}</p>
            <p>
              Order Status: {""}
              <strong
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: `${data.status === "completed" ? "green" : "red"}`,
                }}
              >
                {data.status}
              </strong>
            </p>
            <p>First Name: {data.billing.first_name}</p>
            <p>Last Name: {data.billing.last_name}</p>
            <p>City: {data.billing.city}</p>
            <p>Country: {data.billing.country}</p>
            <p> CreatedAt: {data.date_created}</p>
            <p>Total Amount: {data.total} PKR</p>
          </div>
        ) : (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
