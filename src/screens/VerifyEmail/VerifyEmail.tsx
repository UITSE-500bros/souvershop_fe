import { Loading } from "@/components/Loading";
import React from "react";
import { useParams } from "react-router-dom";

export default function VerifyEmail() {
  const accessToken = useParams().accessToken;
  return (
    <div>
      <h1>Verify Email</h1>
      <p>Access Token: {accessToken}</p>
      <Loading />
    </div>
  );
}
