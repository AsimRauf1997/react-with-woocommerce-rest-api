import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Col, Row, Tabs } from "react-bootstrap";

const ProductTabs = ({ selectedProduct }) => {
  const [key, setKey] = useState("story");

  return (
    <Tabs
      id='controlled-tab-example'
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className='mb-4'
      variant='tabs'
      style={{
        color: "#aedaa0",
        textColor: "#aedaa0",
      }}
    >
      <Tab eventKey='story' title='Our Story'>
        <Row className='mt-2'>
          <h1>Brief Story</h1>
          <Col
            style={{
              textAlign: "justify",
              width: "50%",
            }}
          >
            Kilim is very popular around the world because of their unique and
            beautiful patterns. If we look into the history of Kilim, then we
            come to know that the origin of Kilim is Turkish and is used to
            define pile-less rugs that are made using the flat-weave method.
            These unique and gorgeous textiles were also made in other regions
            like the Balkans and North Africa. In history, Kilims have been used
            not just for their practical advantages but also for their
            exquisiteness and exceptional appealing. For generations, this
            product of a diverse range of rich materials with its distinctive
            style and feel is being made by skilled aritsans from Balochistan.
          </Col>
        </Row>
      </Tab>
      <Tab eventKey='features' title='Features'>
        <Row>
          <Col sm='6'>
            <Row>
              <Col sm='6' lg='6' md='6'>
                Material Composition
              </Col>
              <Col sm='6' lg='6' md='6'>
                {selectedProduct.material}
              </Col>
            </Row>
            <Row>
              <Col sm='6' lg='6' md='6'>
                Craft :
              </Col>
              <Col sm='6' lg='6' md='6'>
                {selectedProduct.craftName}
              </Col>
            </Row>
            <Row>
              <Col sm='6' lg='6' md='6'>
                Region :
              </Col>
              <Col sm='6' lg='6' md='6'>
                {selectedProduct.regionName}
              </Col>
            </Row>
            <Row
              hidden={
                parseInt(selectedProduct.productLength) +
                  parseInt(selectedProduct.width) +
                  parseInt(selectedProduct.height) +
                  parseInt(selectedProduct.diameter) >
                0
                  ? false
                  : true
              }
            >
              <Col sm='6' lg='6' md='6'>
                Dimensions :
              </Col>
              <Col sm='6' lg='6' md='6'>
                {parseInt(selectedProduct.productLength) > 0
                  ? "Length: " + selectedProduct.productLength + " - "
                  : null}
                {parseInt(selectedProduct.width) > 0
                  ? "Width: " + selectedProduct.width + " - "
                  : null}
                {parseInt(selectedProduct.height) > 0
                  ? "Height: " + selectedProduct.height + " - "
                  : null}
                {parseInt(selectedProduct.diameter) > 0
                  ? "Diameter: " + selectedProduct.diameter + " - "
                  : null}
                {" [" + selectedProduct.dimensionUnitName + "]"}
              </Col>
            </Row>
            <Row>
              <Col sm='6' lg='6' md='6'>
                Weight :
              </Col>
              <Col sm='6' lg='6' md='6'>
                {selectedProduct.weight + " " + selectedProduct.weightUnitName}
              </Col>
            </Row>
            <Row>
              <Col sm='6' lg='6' md='6'>
                Whats is in the Box :
              </Col>
              <Col sm='6' lg='6' md='6'>
                {selectedProduct.variety}
              </Col>
            </Row>
            <Row>
              <Col sm='6' lg='6' md='6'>
                Care Instruction :
              </Col>
              <Col sm='6' lg='6' md='6'>
                {selectedProduct.instructions}
              </Col>
            </Row>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey='disc' title='Disclaimer'>
        <Row>
          <Col sm='12'>
            <p>
              Actual product may slightly vary in color, shape, design and size.
            </p>
            <p>
              Upon order placement, delivery time will be communicated by our
              customer support.
            </p>
          </Col>
        </Row>
      </Tab>
      <Tab eventKey='DD' title='Delivery & Returns'>
        <Row>
          <Col sm='12'>
            <p className={"font-size14"}>
              Estimated time for delivery is{" "}
              {selectedProduct.minimiumDeliveryTime}
              {parseInt(selectedProduct.maximumDeliveryTime) > 0
                ? `- ${selectedProduct.maximumDeliveryTime}`
                : null}{" "}
              working days.
            </p>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
};

export default ProductTabs;
