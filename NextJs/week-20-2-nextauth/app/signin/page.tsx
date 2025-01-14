"use client"
import axios from "axios";
import React from "react";

export default function signin() {
  return (
    <div>
      <h1>Sign in Page</h1>
      <input />
      <input />
      <button onClick={async () => {
        const res = await axios.post("http://localhost:3000/api/signin", {
          username: "Asdd",
          password: "Asdgasfdas"
        })

        localStorage.setItem("token", res.data.token);
      }}>Sign in</button>
    </div>
  )
}
