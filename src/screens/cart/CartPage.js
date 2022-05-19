import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/cart/CartItem";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <Container>
      {cartItem.map((data) => (
        <CartItem data={data} />
      ))}
    </Container>
  );
};

export default CartPage;
