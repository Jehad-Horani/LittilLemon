// pages/loading.js
"use client";

import Head from "next/head";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Loading | LittilLemon</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.lemonWrapper}>
          <div style={styles.lemon}></div>
        </div>
        <h1 style={styles.text}>Preparing something fresh…</h1>
      </div>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #fffde7 0%, #f4ce14 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  lemonWrapper: {
    width: "100px",
    height: "100px",
    marginBottom: "30px",
    animation: "spin 3s linear infinite",
  },
  lemon: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, #fff176, #fbc02d)",
    border: "6px solid #495E57",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },
  text: {
    color: "#495E57",
    fontSize: "1.5rem",
    fontWeight: "600",
    textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
  },
};

// Custom global style
const globalStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = globalStyles;
  document.head.appendChild(styleSheet);
}
