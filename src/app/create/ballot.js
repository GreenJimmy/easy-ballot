"use client";

import { useState, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import FormCheck from "react-bootstrap/FormCheck";

import { toFormData } from "../../scripts/utils";
import { BallotBlock } from "../../components/ballot-block";

const logos = ["1.jpg", "2.jpg"];

export default function Ballot({ ballot }) {
  const formRef = useRef();

  const [save, setSave] = useState();
  const [created, setCreated] = useState();
  const [errors, setErrors] = useState([]);

  const validateForm = (formDataObj) => {
    const newErrors = [];

    console.log(formDataObj);

    // check ballot_name

    // check if logo picked

    // check subdomain

    setErrors(newErrors);
    return newErrors.length > 0;
  };

  const saveForm = (doAfterSave) => {
    if (save) {
      return false;
    }

    const formElements = Array.from(formRef.current.elements);
    const formDataObj = {};
    formElements.forEach((formElement) => {
      if (formElement.tagName === "INPUT") {
        if (formElement.type !== "checkbox") {
          formDataObj[formElement.name] = formElement.value;
        }

        if (formElement.type === "checkbox" && formElement.checked) {
          formDataObj[formElement.name] = true;
        }
      }
    });

    const valid = validateForm(formDataObj);

    if (!valid) {
      return false;
    }

    setSave(true);

    window.setTimeout(async () => {
      await fetch(
        `https://${process.env.NEXT_PUBLIC_API_URI}/api/ballot/save`,
        {
          method: "POST",
          body: toFormData(formDataObj),
        }
      );

      setSave(false);
      setCreated(true);

      if (doAfterSave) {
        doAfterSave();
      }
    }, [100]);
  };

  const [activeKey, setActiveKey] = useState("start");

  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={saveForm} ref={formRef}>
            <Tabs
              defaultActiveKey="start"
              activeKey={activeKey}
              onSelect={(tab) => setActiveKey(tab)}
              className="mb-5"
            >
              <Tab eventKey="start" title="Start Here" className="mt-5">
                <h3 className="mb-5">
                  Let&apos;s customize your ballot guide in three easy steps.
                </h3>
                <h5>1. Name your guide:</h5>
                <p>
                  <Form.Control
                    name="ballot_name"
                    style={{ maxWidth: "200px" }}
                    className="d-inline"
                  />
                  &apos;s Ballot Guide
                </p>
                <h5 className="mt-5">
                  2. Let&apos;s personalize it - select a graphic to go at the
                  top of your guide:
                </h5>
                <div className="bg-white d-flex flex-row rounded">
                  {logos.map((logo, index) => (
                    <div
                      className="logo d-flex flex-row align-items-center p-3"
                      key={logo}
                    >
                      <Form.Check
                        type="radio"
                        name="image"
                        value={logo}
                        defaultChecked={index === 0}
                      ></Form.Check>
                      <img
                        src={`/img/logos/${logo}`}
                        style={{ maxWidth: "100px" }}
                      />
                    </div>
                  ))}
                </div>
                <h5 className="mt-5">3. Pick your vanity URL:</h5>
                <p>
                  <Form.Control
                    name="subdomain"
                    style={{ maxWidth: "200px" }}
                    className="d-inline"
                  />
                  .easyballot.vote
                </p>

                {/* <h5 className="mt-5">
                  3. You have two options to create your guide:
                </h5>
                <p>
                  This year’s ballot looks like a never-ending novel, but fear
                  not, here at EasyBallot.Vote we make it EASY.
                </p>
                <ul>
                  <li>
                    Option 1 - Auto-populate the recommendations sent to you by
                    your trusted friend, then edit it as you wish. Many
                    organizations have filled out the ballot for all of Arizona.
                    This option will help you influence friends outside your
                    district.
                  </li>
                  <li>Option 2 - Start from scratch and fill out your own</li>
                </ul> */}
                <div className="mt-5 d-flex">
                  {created ? (
                    <>
                      <Button
                        style={{ visibility: "hidden" }}
                        className="me-auto"
                        size="lg"
                      >
                        &lt; Previous
                      </Button>
                      <Button
                        onClick={saveForm}
                        className={`mx-auto ${save ? "saving" : "save"}`}
                        size="lg"
                      >
                        <div className="spinner">
                          <Spinner />
                        </div>
                        <span>Save</span>
                      </Button>
                      <Button
                        onClick={() => setActiveKey("issues")}
                        className="ms-auto"
                        size="lg"
                      >
                        Next &gt;
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={() => saveForm(() => setActiveKey("issues"))}
                      className={`ms-auto ${save ? "saving" : "save"}`}
                      size="lg"
                    >
                      <div className="spinner">
                        <Spinner />
                      </div>
                      <span>Save</span>
                    </Button>
                  )}
                </div>
              </Tab>
              <Tab eventKey="issues" title="Issues" disabled={!created}>
                <h3 className="mb-5">
                  Let&apos;s Continue Personalizing Your Guide
                </h3>
                <p>
                  Knowing your top issues helps your friends and family
                  understand your values and how they are reflected in the
                  candidates you choose. Select 3-5 of your top priorities.
                </p>
                <div className="issues text-center">
                  {ballot.issues.map((issue) => {
                    return (
                      <div
                        key={`issue:${issue.name}`}
                        className={`issue m-3 d-inline-block text-start`}
                      >
                        <FormCheck
                          type="checkbox"
                          id={`issue:${issue.name}`}
                          name={`issues.${issue.name}`}
                          label={issue.name}
                          value={issue.name}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 d-flex">
                  <Button
                    onClick={() => setActiveKey("start")}
                    className="me-auto"
                    size="lg"
                  >
                    &lt; Previous
                  </Button>
                  <Button
                    onClick={saveForm}
                    className={`mx-auto ${save ? "saving" : "save"}`}
                    size="lg"
                  >
                    <div className="spinner">
                      <Spinner />
                    </div>
                    <span>Save</span>
                  </Button>
                  <Button
                    onClick={() => setActiveKey("candidates")}
                    className="ms-auto"
                    size="lg"
                  >
                    Next &gt;
                  </Button>
                </div>
              </Tab>
              <Tab eventKey="candidates" title="Candidates" disabled={!created}>
                <h3 className="mb-5">Great, now comes the fun part!</h3>
                <p>
                  From here you can change the recommendations on any and all
                  races. As an informed voter, your perspective is valuable.
                </p>
                <div className="p-3 p-md-5 bg-white">
                  <ul className="list-ballot">
                    <BallotBlock section={ballot.country} showAll showChecks />
                  </ul>
                </div>
                <div
                  className="p-3 d-flex position-sticky"
                  style={{ bottom: 0, backgroundColor: "var(--navy)" }}
                >
                  <Button
                    onClick={() => setActiveKey("issues")}
                    className="me-auto"
                    size="lg"
                  >
                    &lt; Previous
                  </Button>
                  <Button
                    onClick={saveForm}
                    className={`mx-auto ${save ? "saving" : "save"}`}
                    size="lg"
                  >
                    <div className="spinner">
                      <Spinner />
                    </div>
                    <span>Save</span>
                  </Button>
                  <Button
                    onClick={saveForm}
                    className={`mx-auto ${save ? "saving" : "save"}`}
                  >
                    <Spinner />
                    <span>Save</span>
                  </Button>
                  <Button
                    onClick={() => setActiveKey("propositions")}
                    className="ms-auto"
                    size="lg"
                  >
                    Next &gt;
                  </Button>
                </div>
              </Tab>
              <Tab
                eventKey="propositions"
                title="Propositions"
                disabled={!created}
              >
                <h3 className="mb-5">Propositions</h3>
                <div className="mt-5 d-flex">
                  <Button
                    onClick={() => setActiveKey("candidates")}
                    className="me-auto"
                    size="lg"
                  >
                    &lt; Previous
                  </Button>
                  <Button
                    onClick={saveForm}
                    className={`mx-auto ${save ? "saving" : "save"}`}
                    size="lg"
                  >
                    <div className="spinner">
                      <Spinner />
                    </div>
                    <span>Save</span>
                  </Button>
                  <Button
                    onClick={() => setActiveKey("judges")}
                    className="ms-auto"
                    size="lg"
                  >
                    Next &gt;
                  </Button>
                </div>
              </Tab>
              <Tab eventKey="judges" title="Judges" disabled={!created}>
                <h3 className="mb-5">Judges</h3>
                <div className="mt-5 d-flex">
                  <Button
                    onClick={() => setActiveKey("propositions")}
                    className="me-auto"
                    size="lg"
                  >
                    &lt; Previous
                  </Button>
                  <Button
                    onClick={saveForm}
                    className={`mx-auto ${save ? "saving" : "save"}`}
                    size="lg"
                  >
                    <div className="spinner">
                      <Spinner />
                    </div>
                    <span>Save</span>
                  </Button>
                  <Button
                    className="ms-auto"
                    size="lg"
                    style={{ visibility: "hidden" }}
                  >
                    Next &gt;
                  </Button>
                </div>
              </Tab>
            </Tabs>
          </Form>
        </Col>
      </Row>
    </>
  );
}
