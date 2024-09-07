import Head from "next/head";
import { Antonio, Montserrat } from "next/font/google";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  Nav,
  NavLink,
} from "react-bootstrap";

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
      <html lang="en" className={`${montserrat.variable} ${antonio.variable}`}>
        <body>
          <Container id="main-container" fluid className="g-0">
            <Navbar variant="dark">
              <Container>
                <NavbarBrand href="/" className="d-flex align-items-center">
                  <img src="/img/logo.svg" className="me-3" />
                  <span property="name">EasyBallot.vote</span>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse className="justify-content-end">
                  <Nav className="ms-auto">
                    <NavLink href="#home">Home</NavLink>
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
