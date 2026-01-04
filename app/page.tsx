export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0f14",
        color: "#e9eef7",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#101826",
          borderRadius: 16,
          padding: 28,
          border: "1px solid rgba(255,255,255,.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginTop: 0 }}>TradeFlow AI</h1>

        <p style={{ color: "#a8b3c7" }}>
          Secure access to your workspace
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          disabled
          style={{
            width: "100%",
            padding: 12,
            marginTop: 12,
            borderRadius: 10,
            border: "none",
          }}
        />

        <button
          disabled
          style={{
            width: "100%",
            marginTop: 14,
            padding: 12,
            borderRadius: 10,
            background: "#4f8cff",
            color: "white",
            border: "none",
            fontWeight: 700,
            cursor: "not-allowed",
            opacity: 0.7,
          }}
        >
          Login (Coming Next)
        </button>

        <div
          style={{
            marginTop: 18,
            fontSize: 12,
            color: "#a8b3c7",
          }}
        >
          Powered by <b>Dual Automation Technologies</b>
        </div>
      </div>
    </main>
  );
}
