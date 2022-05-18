/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../store/actions/productAction";
const NaturalItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToFAvorite = () => {
    dispatch(addToFav(data));
  };

  return (
    <div
      key={data.id}
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
        <div
          style={{
            dispaly: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <button
            style={{
              padding: 10,
              backgroundColor: "red",
              border: "none",
              borderRadius: 20,
            }}
          >
            <a
              style={{
                textDecoration: "none",
                color: "black",
              }}
              href={`/natural/${data.id}`}
            >
              Product Detail
            </a>
          </button>
          <button
            style={{
              padding: 10,
              backgroundColor: "red",
              border: "none",
              borderRadius: 20,
              marginLeft: 10,
              cursor: "pointer",
            }}
            onClick={handleAddToFAvorite}
          >
            Add to Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default NaturalItem;
