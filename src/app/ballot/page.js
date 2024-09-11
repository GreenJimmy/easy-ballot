import { headers } from "next/headers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
} from "react-share";

import { getSubDomain } from "../../scripts/utils";

export default async function Ballot({
  searchParams: { lat, lng, city, county },
}) {
  const subDomain = getSubDomain(headers().get("host"));

  const response = await fetch(
    `https://${process.env.API_URI}/api/ballot?${new URLSearchParams({
      subDomain,
      lat,
      lng,
      city,
      county,
    }).toString()}`,
    {
      method: "GET",
    }
  );
  const ballot = await response.json();

  const shareUrl = `https://${subDomain}.easyballot.vote`;
  const shareTitle = "JT's Ballot";

  return (
    <>
      <Row className="my-5">
        <Col className="text-center">
          <h2>Welcome to</h2>
          <h3>“Civic Engagement Beyond Voting”</h3>
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
            <div className="p-5">
              <BallotBlock section={ballot.country} order={["elections"]} />
              <BallotBlock
                section={ballot.country.demarcations.States[0]}
                order={["elections"]}
              />
            </div>
          </div>
        </Col>
        <Col lg="2"></Col>
      </Row>
    </>
  );
}

const BallotBlock = ({ section, order }) => {
  return (
    <ul className="list-ballot">
      <li>
        <h4>{section.name}</h4>
        <ul>
          {order.map((subSectionName) => {
            const subSectionObj = section[subSectionName];
            return subSectionObj.map((subSection) => {
              return (
                <li
                  key={`${section.name}:${subSectionName}:${subSection.name}`}
                >
                  <h5>{subSection.name}</h5>
                  <ul>
                    {subSection.candidates.map((candidate) => {
                      return (
                        <li key={candidate.name}>
                          <div className="candidate">
                            <FormCheck
                              type="radio"
                              id={`${subSection.name}:${candidate.name}`}
                              name={subSection.name}
                              label={candidate.name}
                              value={candidate.name}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            });
          })}
        </ul>
      </li>
    </ul>
  );
};
