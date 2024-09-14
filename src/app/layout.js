/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import { Antonio, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "../styles/index.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "EasyBallot",
  description: "Helping Friends Vote with Confidence",
  openGraph: {
    title: "EasyBallot",
    description: "Helping Friends Vote with Confidence",
    url: "https://easyballot.vote",
    siteName: "EasyBallot",
    images: [
      {
        url: "https://easyballot.vote/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className={`${montserrat.variable} ${antonio.variable}`}>
        <body>
          <GoogleOAuthProvider
            clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
          >
            <Container id="main-container" fluid className="g-0">
              <Navbar expand="sm" variant="dark">
                <Container>
                  <NavbarBrand
                    href="/"
                    className="d-flex align-items-center"
                    as={Link}
                  >
                    <img
                      src="/img/logo.svg"
                      className="me-3"
                      alt="EasyBallot.vote"
                    />
                  </NavbarBrand>
                </Container>
              </Navbar>
              <Container id="content" fluid>
                <Container className="pt-5">
                  {children}
                  <Row>
                    <Col className="mt-5"></Col>
                  </Row>
                </Container>
              </Container>
              <Container fluid id="footer" className="py-2 py-md-4">
                <Container>
                  <Row>
                    <Col
                      md="3"
                      lg="2"
                      className="d-flex align-items-center my-2"
                    >
                      <Nav className="flex-column mx-auto mx-md-0 me-md-auto">
                        <NavLink href="mailto:info@downballot.app">
                          Contact Us
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col
                      md="6"
                      lg="8"
                      className="text-center d-flex-align-items-center my-2"
                    >
                      <Link href="/">
                        <img
                          src="/img/logo-button.svg"
                          className="w-100 mx-auto"
                          style={{ maxWidth: "300px" }}
                          alt="EasyBallot.vote"
                        />
                      </Link>
                    </Col>
                    <Col
                      md="3"
                      lg="2"
                      className="d-flex align-items-center my-2"
                    >
                      <Button
                        variant="secondary"
                        className="mx-auto mx-md-0 ms-md-auto"
                        size="lg"
                      >
                        Donate
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Container>
            <Analytics />
          </GoogleOAuthProvider>
        </body>
      </html>
    </>
  );
}
