import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FavoriteItem from "../components/favorite/FavoriteItem";

const FavoritesPage = () => {
  const fav = useSelector((state) => state.favorites);
  const { favorite } = fav;
  return (
    <Row>
      {favorite.map((fav) => (
        <Col lg={3} md={3}>
          <FavoriteItem key={fav.id} data={fav} />
        </Col>
      ))}
    </Row>
  );
};

export default FavoritesPage;
