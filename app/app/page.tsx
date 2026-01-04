"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AppPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        window.location.href = "/";
      } else {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 24, color: "#e9eef7", background: "#0b0f14", minHeight: "100vh" }}>
        Loading…
      </div>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0f14",
        color: "#e9eef7",
        padding: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <h1>TradeFlow AI — App</h1>
      <p style={{ color: "#a8b3c7" }}>
        You are authenticated. This is the protected app area.
      </p>

      <div
        style={{
          marginTop: 24,
          padding: 24,
          borderRadius: 16,
          background: "#101826",
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <p>This is where the Aminos embed will go next.</p>
      </div>
    </main>
  );
}
