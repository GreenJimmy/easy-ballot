import { Row, Col } from "react-bootstrap";

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
          <h2>HELPING FRIENDS VOTE WITH CONFIDENCE</h2>
        </Col>
      </Row>
    </>
  );
}
