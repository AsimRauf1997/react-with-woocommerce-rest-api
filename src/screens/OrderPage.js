import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-spinners/ClipLoader";
import OrderItem from "../components/order/OrderItem";
import { getAllOrders } from "../store/actions/orderAction";

const OrderPage = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.ordersList);
  const { orders, loading } = ordersList;
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  return (
    <div>
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
          {orders.map((data) => (
            <OrderItem data={data} />
          ))}
        </>
      )}
    </div>
  );
};

export default OrderPage;
