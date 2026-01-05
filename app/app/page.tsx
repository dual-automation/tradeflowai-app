"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";


export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setStatus("");

      if (!email || !email.includes("@")) {
        setStatus("Please enter a valid email address.");
        return;
      }

      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/app`,
        },
      });

      if (error) throw error;

      setStatus("Check your email for the secure login link.");
    } catch (err: any) {
      setStatus(err?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #1b2a4a 0%, #0b0f14 45%)",
        color: "#e9eef7",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: 420,
          background: "rgba(16,24,38,.92)",
          borderRadius: 18,
          padding: 32,
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow: "0 30px 80px rgba(0,0,0,.6)",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="TradeFlow AI"
          style={{
            height: 56,
            margin: "0 auto 18px",
            display: "block",
          }}
        />

        <h1 style={{ margin: "6px 0 6px" }}>TradeFlow AI</h1>
        <p style={{ color: "#a8b3c7", marginBottom: 18 }}>
          Secure access to your TradeFlow workspace
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,.12)",
            background: "#0b1220",
            color: "#e9eef7",
            outline: "none",
          }}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: 14,
            padding: 12,
            borderRadius: 10,
            background: "linear-gradient(135deg,#4f8cff,#6aa2ff)",
            color: "white",
            border: "none",
            fontWeight: 700,
            cursor: loading ? "default" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Sending secure link…" : "Continue"}
        </button>

        {status && (
          <p
            style={{
              marginTop: 14,
              fontSize: 13,
              color: "#a8b3c7",
            }}
          >
            {status}
          </p>
        )}

        <div
          style={{
            marginTop: 18,
            fontSize: 12,
            color: "#8ea0c2",
            opacity: 0.9,
          }}
        >
          Powered by <b>Dual Automation Technologies</b>
        </div>
      </div>
    </main>
  );
}
