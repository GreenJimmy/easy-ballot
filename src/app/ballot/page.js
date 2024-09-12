import { headers } from "next/headers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getSubDomain, toFormData } from "../../scripts/utils";
import { PrintCopyButtons, SocialButtons } from "../../components/buttons";
import { BallotBlock } from "../../components/ballot-block";

export default async function Ballot({
  searchParams: { lat, lng, city, county },
}) {
  const host = headers().get("host");
  const subDomain = getSubDomain(host);

  const siteNameResponse = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URI}/name/${subDomain}`,
    {
      method: "GET",
    }
  );
  const siteName = await siteNameResponse.text();

  const siteImgResponse = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URI}/image/${subDomain}`,
    {
      method: "GET",
    }
  );
  const siteImage = await siteImgResponse.text();

  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_API_URI}/api/ballot`,
    {
      method: "POST",
      body: toFormData({
        subdomain: subDomain,
        lat,
        lng,
        city,
        county,
      }),
    }
  );

  const ballot = await response.json();
  // console.log(ballot);

  const shareUrl = `https://${host}`;

  return (
    <>
      <Row className="my-5">
        <Col className="text-center">
          <h2>Welcome to</h2>
          <h3>{siteName}</h3>
          <h3>2024 Ballot Guide</h3>
        </Col>
      </Row>
      <Row className="my-5">
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
            <div className="p-3 p-md-5">
              <ul className="list-ballot">
                <BallotBlock section={ballot.country} />
              </ul>
            </div>
          </div>
        </Col>
        <Col lg="2"></Col>
      </Row>
      <Row>
        <Col lg="2"></Col>
        <Col lg="8" className="text-center">
          <p>
            Arizona’s ballot is the longest in state history.
            <br />
            Save this for when you vote!
          </p>
          <PrintCopyButtons copyString={shareUrl} />
        </Col>
        <Col lg="2"></Col>
      </Row>
      <Row>
        <Col lg="2"></Col>
        <Col lg="8" className="text-center">
          <SocialButtons shareUrl={shareUrl} shareTitle={siteName} />
        </Col>
        <Col lg="2"></Col>
      </Row>
    </>
  );
}
