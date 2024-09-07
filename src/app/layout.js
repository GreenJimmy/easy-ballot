import Head from "next/head";
import { Antonio, Montserrat } from "next/font/google";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

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

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Easy Ballot</title>
      </Head>
      <html lang="en" className={`${montserrat.variable} ${antonio.variable}`}>
        <body>
          <Container id="main-container" fluid className="g-0">
            <Navbar variant="dark">
              <Container>
                <NavbarBrand
                  href="/"
                  className="d-flex align-items-center"
                  as={Link}
                >
                  <img src="/img/logo.svg" className="me-3" />
                  <span property="name">EasyBallot.vote</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse className="justify-content-end">
                  <Nav className="ms-auto">
                    <NavLink href="/" as={Link}>
                      Home
                    </NavLink>
                    <NavLink href="mailto:info@downballot.app">
                      Contact Us
                    </NavLink>
                  </Nav>
                </NavbarCollapse>
              </Container>
            </Navbar>
            <Container id="content" fluid>
              <Container>{children}</Container>
            </Container>
          </Container>
        </body>
      </html>
    </>
  );
}
