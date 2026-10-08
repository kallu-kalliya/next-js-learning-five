import { cookies } from "next/headers"; // to make it dynamic rendered 

export default async function About() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("about server components");
  return <h1>about me page {new Date().toLocaleTimeString()}</h1>; // static without async and await in production 
}

