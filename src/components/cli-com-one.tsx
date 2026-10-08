"use client";
import { ClientComponentTwo } from "./cli-com-two";
import { useState } from "react";

export const ClientComponentOne = () => {
  const [name, setName] = useState("batman");
  return (
    <>
      <h1>Client component one</h1>
      <ClientComponentTwo/>
    </>
  );
};
