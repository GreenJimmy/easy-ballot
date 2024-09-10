"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

export default function TopNav() {
  const { signOut, openSignIn, openSignUp, ...other } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <>
      <Nav className="ms-auto">
        {!isSignedIn ? (
          <>
            <NavLink onClick={() => openSignUp()}>Sign Up</NavLink>
            <NavLink onClick={() => openSignIn()}>Login</NavLink>
          </>
        ) : (
          <NavLink onClick={signOut}>Logout</NavLink>
        )}
      </Nav>
    </>
  );
}
