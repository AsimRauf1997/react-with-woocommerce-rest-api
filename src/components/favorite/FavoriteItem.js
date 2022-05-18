/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { removeFromFav } from "../../store/actions/productAction";

const FavoriteItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    toast(`${data.name} Removed `);
    dispatch(removeFromFav(data.id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <div
        style={{
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          backgroundColor: "gray",
          position: "relative",
        }}
      >
        <h3>
          Title: <strong>{data.name}</strong>
        </h3>
        <div
          style={{
            justifyContent: "space-between",
            borderRadius: 20,
          }}
        >
          {data.images.map((c) => (
            <img
              src={c.src}
              alt='image'
              width='200'
              style={{
                marginLeft: 10,
                justifyContent: "space-between",
                borderRadius: 20,
              }}
            />
          ))}
        </div>
        <div
          style={{
            width: "40vw",
          }}
        >
          <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
          }}
        >
          {data.regular_price} $
        </div>

        <button
          style={{
            padding: 10,
            backgroundColor: "red",
            border: "none",
            borderRadius: 20,
            marginLeft: 10,
          }}
          onClick={handleRemove}
        >
          Remove From Favorites
        </button>
      </div>
    </div>
  );
};
export default FavoriteItem;
