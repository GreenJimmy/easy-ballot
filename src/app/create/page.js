"use client";

import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const logos = ["1.jpg", "2.jpg"];

export default function GetStarted() {
  const saveForm = (e) => {
    e.preventDefault();
    console.log("ok lets do it");
    return false;
  };
  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={saveForm}>
            <Tabs defaultActiveKey="start">
              <Tab eventKey="start" title="Start Here" className="mt-5">
                <h3 className="mb-5">
                  Let&apos;s customize your ballot guide in three easy steps.
                </h3>
                <h5>1. Name your guide:</h5>
                <p>
                  <Form.Control
                    name="name"
                    style={{ maxWidth: "200px" }}
                    className="d-inline"
                  />
                  's Ballot Guide
                </p>
                <h5 className="mt-5">
                  2. Let&apos;s personalize it - select a graphic to go at the
                  top of your guide:
                </h5>
                <div className="bg-white"></div>
              </Tab>
              <Tab eventKey="issues" title="Issues">
                Tab content for Profile
              </Tab>
              <Tab eventKey="candidates" title="Candidates">
                Tab content for Contact
              </Tab>
              <Tab eventKey="propositions" title="Propositions">
                Tab content for Contact
              </Tab>
              <Tab eventKey="judges" title="Judges">
                Tab content for Contact
              </Tab>
            </Tabs>
          </Form>
        </Col>
      </Row>
    </>
  );
}
