import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <Row>
        <Col className="three-stock-photos">
          <img className="stock-l" src="/img/stock_l.jpg" />
          <img src="/img/stock_c.jpg" />
          <img className="stock-r" src="/img/stock_r.jpg" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2 className="mb-5">Helping Friends Vote with Confidence</h2>
        </Col>
      </Row>
      <Row>
        <Col md="3" className="d-flex align-items-center">
          <hr className="w-100" />
        </Col>
        <Col md="6" className="text-center">
          <Button size="lg" className="m-3">
            Learn More
          </Button>
          <Button size="lg" className="m-3">
            Get Started
          </Button>
        </Col>
        <Col md="3" className="d-flex align-items-center">
          <hr className="w-100" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="m-5 p-5 box-borders">
            <div className="how-it-works mb-4">
              <h1 className="m-0">HOW IT WORKS</h1>
              <img src="/img/how-it-works.jpg" />
            </div>
            <p>
              Do your friends call you asking how they should fill out their
              ballot this year?
            </p>
            <p>
              <strong>We thought so.</strong>
            </p>
            <p>
              Well, we're here to make your life a whole lot easier.
              EasyBallot.vote is a tool that helps you create a customized
              ballot for any and all races you want to weigh in on across the
              state. Once you have made your ballot, you can share the link with
              your friends. By entering their address, they will have access to
              their specific ballot with your recommendations on important races
              and propositions.
            </p>
            <p>
              Are you ready to make a huge impact on this election by helping
              your friends vote up and down their ballots?
            </p>
            <div className="box-tl" />
            <div className="box-tr" />
            <div className="box-bl" />
            <div className="box-br" />
          </div>
        </Col>
      </Row>
    </>
  );
}
