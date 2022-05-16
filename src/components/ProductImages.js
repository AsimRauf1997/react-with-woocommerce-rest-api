/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const ProductImages = ({ images }) => {
  console.log(images);
  return (
    <div>
      {images.map((c) => (
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
  );
};

export default ProductImages;
