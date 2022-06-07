/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, getCraftProducts } from "../store/actions/productAction";
import Loader from "react-spinners/ClipLoader";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../store/actions/cartAction";
const ProductPage = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector((state) => state.craft);
  const { craftProducts, loading } = productList;
  useEffect(() => {
    dispatch(getCraftProducts());
  }, [dispatch]);
  console.log(
    loading
      ? "Loading"
      : craftProducts
          // .filter((c) => c.is_onwoocom === true)
          .map((data) => data.is_onwoocom === true)
  );
  const handleAddToFAvorite = (data) => {
    toast(`${data.name} : Added to Favorites`);
    dispatch(addToFav(data));
  };
  const handleAddToCart = (data) => {
    toast(`${data.name} : Added to Cart`);
    dispatch(addToCart(data));
  };
  return (
    <Container>
      <h1 className='mt-2'>Featured Products</h1>
      {loading ? (
        <div
          style={{
            top: "50%",
            left: "50%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          <Row>
            {craftProducts
              .filter(
                (c, index) =>
                  c.is_onwoocom === true && c.is_featured_product === true
              )

              .map((data) => (
                <Col md={1} lg={3} xs={1} className='mt-2' key={data._id}>
                  <Card style={{ width: "20rem", border: "none" }}>
                    {data?.images && (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Img
                          variant='top'
                          width={20}
                          src={
                            process.env.REACT_APP_IMAGE_URL + data.images[0].url
                          }
                        />
                      </div>
                    )}

                    <Card.Body>
                      <Row>
                        <Col lg={10}>
                          <Card.Title>{data.name}</Card.Title>
                        </Col>
                        <Col>
                          <a type='button'>
                            <FaCartPlus onClick={() => handleAddToCart(data)} />
                          </a>
                        </Col>
                      </Row>

                      <br />
                      <div
                        style={{
                          display: "flex",
                          flex: 1,
                          justifyContent: "space-evenly",
                        }}
                      >
                        <>
                          <Button
                            style={{
                              backgroundColor: "#aedaa0",
                              border: "none",
                            }}
                            onClick={() =>
                              navigate(`/productdetail/${data._id}`, {
                                push: true,
                              })
                            }
                          >
                            See Details
                          </Button>
                          <Button
                            style={{
                              backgroundColor: "#aedaa0",
                              border: "none",
                            }}
                            onClick={() => handleAddToFAvorite(data)}
                          >
                            Add To Favorites
                          </Button>
                        </>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default ProductPage;
