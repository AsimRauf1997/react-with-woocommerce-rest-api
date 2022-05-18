import React from "react";
import { Link } from "react-router-dom";

const OrderItem = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          borderRadius: 20,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#cfcfcf",
          marginTop: 10,
          padding: 10,
          width: 500,
        }}
      >
        <p>
          Order Number : <strong>{data.number}</strong>
        </p>
        <p>
          Order Key : <strong>{data.order_key}</strong>
        </p>
        <p>
          Order Status: <strong>{data.status}</strong>
        </p>
        <button
          style={{
            padding: 10,
            backgroundColor: "red",
            border: "none",
            borderRadius: 20,
          }}
        >
          <Link
            to={`/order/${data.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            See Order Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
