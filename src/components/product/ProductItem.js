/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../../store/actions/productAction";
import { toast } from "react-toastify";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../store/actions/cartAction";
const ProductItem = ({ data, flag, handleRemove }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fav = useSelector((state) => state.favorites);
  console.log("FAvorites Added:", fav);
  const handleAddToFAvorite = () => {
    toast(`${data.name} : Added to Favorites`);
    dispatch(addToCart(data));
  };
  console.log(data);
  return (
    <>
      <Container className='mt-2'>
        <Card style={{ width: "20rem" }} key={data.id}>
          {data.images.map((c) => (
            <Card.Img variant='bottom' src={c.src} />
          ))}

          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text
              dangerouslySetInnerHTML={{
                __html: data.description,
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
                    onClick={() => navigate(`/productdetail/${data.id}`)}
                  >
                    See Details
                  </Button>
                  <Button variant='primary' onClick={handleAddToFAvorite}>
                    Add To Cart
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
      </Container>
    </>
  );
};

export default ProductItem;
