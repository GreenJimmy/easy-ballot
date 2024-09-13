/* eslint-disable @next/next/no-img-element */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Address from "../components/address";

export default function UserLanding() {
  return (
    <>
      <Row>
        <Col className="text-center">
          <h2 className="mb-5">Helping Friends Vote with Confidence</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="3"></Col>
        <Col lg="6" className="d-flex align-items-center">
          <img src="/img/home/stock_c.jpg" className="w-100" alt="Jst Voted" />
        </Col>
        <Col lg="3" className="align-items-center d-none d-lg-flex"></Col>
      </Row>
      <Row className="mt-5">
        <Col lg="2"></Col>
        <Col lg="8" className="text-center">
          <p>
            Researching all the races on your ballot is a daunting task.
            Luckily, your trusted friend, (Jennifer McDowell), has your back and
            invited you to view their ballot recommendations.
          </p>
        </Col>
        <Col lg="2"></Col>
      </Row>
      <Row>
        <Col md="4" className="text-center mt-5 ">
          <img
            src="/img/home/map.svg"
            style={{ height: "10rem" }}
            alt="Step 1 - Address"
          />
          <h3 className="my-3">Step 1</h3>
          <p className="mb-0 mx-auto" style={{ maxWidth: "20rem" }}>
            Enter your address to pull up the specific ballot for your voting
            precinct.
          </p>
        </Col>
        <Col md="4" className="text-center mt-5 ">
          <img
            src="/img/home/print.svg"
            style={{ height: "10rem" }}
            alt="Step 2 - Print"
          />
          <h3 className="my-3">Step 2</h3>
          <p className="mb-0 mx-auto" style={{ maxWidth: "20rem" }}>
            Print or screenshot their ballot recommendations.
          </p>
        </Col>
        <Col md="4" className="text-center mt-5 ">
          <img
            src="/img/home/ballot.svg"
            style={{ height: "10rem" }}
            alt="Step 3 - View"
          />
          <h3 className="my-3">Step 3</h3>
          <p className="mb-0 mx-auto" style={{ maxWidth: "20rem" }}>
            Reference it to fill out your ballot.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="2"></Col>
        <Col lg="8" className="text-center">
          <h3>Enter Your Home Address to Get Started</h3>
          <Address />
        </Col>
        <Col lg="2"></Col>
      </Row>
    </>
  );
}
