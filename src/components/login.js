"use client";

import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { toFormData } from "../scripts/utils";

const Login = () => {
  const router = useRouter();
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const response = await fetch(
          `https://${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
          {
            method: "POST",
            body: toFormData({
              credential: credentialResponse.credential,
            }),
          }
        );

        router.push("/create");
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Login;
