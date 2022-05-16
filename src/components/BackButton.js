import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <div
      style={{
        backgroundColor: "yellowgreen",
        padding: 10,
        marginTop: 10,
        width: 100,
        textAlign: "center",
        textDecoration: "none",
        fontWeight: "bold",
        borderRadius: 20,
      }}
    >
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
        }}
      >
        Go Back
      </Link>
    </div>
  );
};

export default BackButton;
