"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <Row className="my-5">
        <Col xs="0" lg="3" className="align-items-center d-none d-lg-flex">
          <img src="/img/stock_l.jpg" className="w-100" alt="Just Voted" />
        </Col>
        <Col xs="12" lg="6" className="d-flex align-items-center">
          <img src="/img/stock_c.jpg" className="w-100" alt="Jst Voted" />
        </Col>
        <Col lg="3" className="align-items-center d-none d-lg-flex">
          <img src="/img/stock_r.jpg" className="w-100" alt="Just Voted" />
        </Col>
      </Row>
      <Row>
        <Col lg="2" xl="3"></Col>
        <Col lg="8" xl="6" className="text-center">
          <h2 className="mb-5">Helping Friends Vote with Confidence</h2>
        </Col>
        <Col lg="2" xl="3"></Col>
      </Row>
      <Row>
        <Col md="2" lg="3" xxl="4" className="d-flex align-items-center">
          <hr className="w-100" />
        </Col>
        <Col md="8" lg="6" xxl="4" className="text-center">
          <Link href="#how-it-works">
            <Button size="lg" className="m-2 m-sm-3">
              Learn More
            </Button>
          </Link>
          <Link href="/get-started">
            <Button size="lg" className="m-2 m-sm-3">
              Get Started
            </Button>
          </Link>
        </Col>
        <Col md="2" lg="3" xxl="4" className="d-flex align-items-center">
          <hr className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col md="1" xl="2" />
        <Col md="10" xl="8">
          <div className="box-borders my-5 py-md-5">
            <Row>
              <Col
                lg="6"
                xxl="4"
                className="d-flex align-items-center text-center mb-4 mb-lg-0"
              >
                <h1 className="m-0" id="how-it-works">
                  How it Works
                </h1>
              </Col>
              <Col lg="6" xxl="8" className="d-flex align-items-center">
                <img
                  src="/img/how-it-works.jpg"
                  className="w-100"
                  alt="How it Works"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="mt-5">
                  Do your friends call you asking how they should fill out their
                  ballot each year?
                </p>
                <p>
                  <strong>We thought so.</strong>
                </p>
                <p>
                  Well, we&apos;re here to make your life a whole lot easier.
                  EasyBallot.vote is a tool that helps you create a customized
                  ballot for any and all races you want to weigh in on across
                  the state. Once you have made your ballot, you can share the
                  link with your friends. By entering their address, they will
                  have access to their specific ballot with your recommendations
                  on important races and propositions.
                </p>
                <p className="mb-0">
                  Are you ready to make a huge impact on this election by
                  helping your friends vote up and down their ballots?
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="4" className="text-center mt-5">
                <img
                  src="/img/create.svg"
                  style={{ height: "10rem" }}
                  alt="Step 1 - Create"
                />
                <h3 className="my-3">Step 1</h3>
                <p className="mb-0 mx-auto" style={{ maxWidth: "20rem" }}>
                  Create your customized ballot.
                </p>
              </Col>
              <Col lg="4" className="text-center mt-5 step-2">
                <img
                  src="/img/share.svg"
                  style={{ height: "10rem" }}
                  alt="Step 2 - Share"
                />
                <h3 className="my-3">Step 2</h3>
                <p className="mb-0 mx-auto" style={{ maxWidth: "20rem" }}>
                  Share your ballot link with your friends and family.
                </p>
              </Col>
              <Col lg="4" className="text-center mt-5 step-3">
                <img
                  src="/img/win.svg"
                  style={{ height: "10rem" }}
                  alt="Step 3 - Win"
                />
                <h3 className="my-3">Step 3</h3>
                <p className="mb-0 mx-auto" style={{ maxWidth: "20rem" }}>
                  Sit back and watch your favorite candidates win all across the
                  state!
                </p>
              </Col>
            </Row>
            <div className="box-tl d-none d-md-block" />
            <div className="box-tr d-none d-md-block" />
            <div className="box-bl d-none d-md-block" />
            <div className="box-br d-none d-md-block" />
          </div>
        </Col>
        <Col md="1" xl="2" />
      </Row>
      <Row>
        <Col className="text-center">
          <h2 className="mb-4">Let&apos;s Get Started!</h2>
          <Link href="/get-started">
            <Button size="lg">Get Started</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
