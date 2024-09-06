import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/index.scss";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio:wght@100..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/img/logo.svg" />
        <title>Easy Ballot</title>
      </Head>
      <html lang="en">
        <body>
          <Container id="main-container">
            <Row>
              <Col>
                <a class="logo" href="/">
                  <img src="/img/logo.svg" />
                  <span property="name">EasyBallot.vote</span>
                </a>
              </Col>
              <Col>
                <a href="mailto:info@downballot.app" class="contact-us">
                  Contact Us
                </a>
              </Col>
            </Row>
            {children}
          </Container>
        </body>
      </html>
    </>
  );
}
