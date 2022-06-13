/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-spinners/ClipLoader";
import { addProduct, getAllProducts } from "../../store/actions/productAction";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { addToCart } from "../../store/actions/cartAction";
import Message from "../../components/Message";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productList);
  const { success, error, isLoading } = useSelector(
    (state) => state.addproduct
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const handleAddToCart = (data) => {
    toast(`${data.name} : Added to Cart`);
    dispatch(addToCart(data));
  };
  const handleAddToWoocommerce = (data) => {
    const transformedData = {
      name: data.name,
      slug: data.slug,
      sku: data.sku,
      price: data.price,
      regular_price: data.price,
      description: data.description,
      short_description: data.description,
      images: [{ src: data.images.map((c) => c.src).toString() }],
    };
    console.log(transformedData);
    dispatch(addProduct(JSON.stringify(transformedData)));
    toast(success ? success : error);
  };
  console.log(products);
  return (
    <Container>
      <h1>NaturalPage</h1>
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
            {products.map((p) => (
              <Item
                p={p}
                isLoading={isLoading}
                handleAddToCart={handleAddToCart}
                handleAddToWoocommerce={handleAddToWoocommerce}
              />
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};
const Item = ({ p, handleAddToCart, handleAddToWoocommerce, isLoading }) => {
  return (
    <Col lg={4} className='mt-2 p-2'>
      <Card style={{ width: "20rem", border: "none" }}>
        {p?.images && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Card.Img variant='top' width={20} src={p.images[0].src} />
          </div>
        )}

        <Card.Body>
          <Row>
            <Col lg={10}>
              <Card.Title>{p.name}</Card.Title>
            </Col>
            <Col>
              <a type='button'>
                <FaCartPlus onClick={() => handleAddToCart(p)} />
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
                // onClick={() =>
                //   navigate(`/productdetail/${data._id}`, {
                //     push: true,
                //   })
                // }
              >
                See Details
              </Button>
              <Button
                style={{
                  backgroundColor: "#aedaa0",
                  border: "none",
                }}
                onClick={() => handleAddToWoocommerce(p)}
              >
                Add to Store
              </Button>
            </>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default HomePage;
