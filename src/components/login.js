"use client";

import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        sessionStorage.setItem("gAuth", JSON.stringify(credentialResponse));
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Login;
