"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0b0f14",
        color: "#e9eef7",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: 420,
          padding: 28,
          borderRadius: 16,
          background: "#101826",
          textAlign: "center",
        }}
      >
        <h1>TradeFlow AI</h1>

        <input
          type="email"
          placeholder="Type here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 16,
            borderRadius: 8,
          }}
        />

        <button
          onClick={() => alert("Button works")}
          style={{
            width: "100%",
            marginTop: 12,
            padding: 12,
            borderRadius: 8,
            background: "#4f8cff",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Test Button
        </button>

        <p style={{ marginTop: 16, fontSize: 12 }}>
          Powered by Dual Automation Technologies
        </p>
      </div>
    </main>
  );
}
