import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/FormCheck";

export default async function Ballot() {
  const response = await fetch(`${process.env.}/api/ballot`);
  const ballot = await response.json();

  return (
    <>
      <Row className="my-5">
        <Col className="text-center">
          <h2>Welcome to</h2>
          <h3>“Civic Engagement Beyond Voting”</h3>
          <h3>2024 Ballot Guide</h3>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="2"></Col>
        <Col lg="8">
          <div className="ballot">
            <div className="bg-white text-center py-3 px-5">
              <img
                src="/img/logos/2.jpg"
                className="mx-auto"
                style={{ maxHeight: "160px" }}
                alt="Logo"
              />
            </div>
            <div className="p-5">
              <ul className="list-ballot">
                <li>
                  <h4>US</h4>
                  <ul>
                    <li>
                      <h5>President</h5>
                      <ul>
                        <li>
                          <div className="candidate">
                            <FormCheck type="radio" label={`Kamala Harris`} />
                          </div>
                        </li>
                        <li>
                          <div className="candidate">
                            <FormCheck type="radio" label={`Kamala Harris`} />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col lg="2"></Col>
      </Row>
    </>
  );
}
