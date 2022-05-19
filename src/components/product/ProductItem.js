/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../store/actions/productAction";
import { toast } from "react-toastify";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ProductItem = ({ data, flag, handleRemove }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fav = useSelector((state) => state.favorites);
  console.log("FAvorites Added:", fav);
  const handleAddToFAvorite = () => {
    toast(`${data.name} : Added to Favorites`);
    dispatch(addToFav(data));
  };

  return (
    <>
      <Card style={{ width: "20rem" }}>
        {data.images.map((c) => (
          <Card.Img variant='bottom' src={c.src} />
        ))}

        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: data.description.substring(0, 112),
            }}
          ></Card.Text>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            {flag === "product" && (
              <>
                <Button
                  variant='primary'
                  onClick={() => navigate(`/craft/${data.id}`)}
                >
                  See Details
                </Button>
                <Button variant='primary' onClick={handleAddToFAvorite}>
                  Add To Favorites
                </Button>
              </>
            )}
            {flag === "favorite" && (
              <>
                <Button variant='primary' onClick={handleRemove}>
                  Remove
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductItem;
