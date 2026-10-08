import fs from "fs";
import { ServerComponentTwo } from "./ser-com-two";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/ser-com-one.tsx", "utf-8");
  return (
    <>
      <h1> Server Component one </h1>
      <ServerComponentTwo />
    </>
  );
};
 