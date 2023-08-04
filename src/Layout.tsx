import React from "react";
import { Col, Row } from "antd";
import "./Layout.scss";

const Layout = () => (
  <div className="box1">
    <Row className="box" justify="space-evenly">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </div>
);

export default Layout;
