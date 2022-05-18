/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "react-spinners/ClipLoader";
import BackButton from "../components/BackButton";
import { getSingleOrder } from "../store/actions/orderAction";

const OrderDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const orderDetail = useSelector((state) => state.orderDetail);
  const { order, loading } = orderDetail;
  useEffect(() => {
    dispatch(getSingleOrder(params.id));
  }, [dispatch]);
  console.log("orderDetail", orderDetail);
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
            <p>Order Number: {order.number}</p>
            <p>
              Order Status: {""}
              <strong
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: `${order.status === "completed" ? "green" : "red"}`,
                }}
              >
                {order.status}
              </strong>
            </p>
            <p>First Name: {order.billing?.first_name}</p>
            <p>Last Name: {order.billing?.last_name}</p>
            <p>City: {order.billing?.city}</p>
            <p>Country: {order.billing?.country}</p>
            <p> CreatedAt: {order.date_created}</p>
            <p>Total Amount: {order.total} PKR</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetail;
