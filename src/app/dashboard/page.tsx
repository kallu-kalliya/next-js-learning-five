"use client";
import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="what's your name"
      />
      {name ? <p>Hello {name} !</p> : ""}
    </div>
  );
}
