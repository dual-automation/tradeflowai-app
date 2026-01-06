"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/app`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for the login link.");
    }

    setLoading(false);
  };

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
        <p style={{ opacity: 0.7 }}>Secure access to your workspace</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 12,
            borderRadius: 8,
            border: "none",
          }}
        />

        <button
          onClick={handleLogin}
          disabled={loading || !email}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 12,
            borderRadius: 8,
            border: "none",
            background: "#355dff",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Sending link…" : "Continue"}
        </button>

        {message && (
          <p style={{ marginTop: 12, fontSize: 14 }}>{message}</p>
        )}

        <p style={{ marginTop: 20, fontSize: 12, opacity: 0.6 }}>
          Powered by Dual Automation Technologies
        </p>
      </div>
    </main>
  );
}
