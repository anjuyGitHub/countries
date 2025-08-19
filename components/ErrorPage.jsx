import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error); //return object
  return <div>Something went wrong. {error.status}</div>;
}
