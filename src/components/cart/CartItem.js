import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions/cartAction";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(data.id));
  };
  return (
    <Row className='mt-2'>
      <Col>
        <Row>
          <Col>
            <ListGroup style={{ width: "40vw" }}>
              <ListGroupItem>
                <Row>
                  {data.images.map((c) => (
                    <Col>
                      <Image src={c.src} width={200} />
                    </Col>
                  ))}
                  <Col>
                    <Row>
                      <Col>
                        <p>{data.name}</p>
                        <p>{data.price}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button variant='danger' onClick={handleRemove}>
                  Remove
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CartItem;
