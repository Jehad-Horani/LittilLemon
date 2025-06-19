// pages/coming-soon.js

import Head from "next/head";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon | LittilLemon</title>
        <meta name="description" content="LittilLemon is launching soon!" />
      </Head>
      <main style={styles.container}>
        <h1 style={styles.title}>Something Delicious is Coming Soon</h1>
        <p style={styles.subtitle}>We’re cooking up something special for you. Stay tuned!</p>
       
      </main>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    background:
      "linear-gradient(135deg, #495E57 0%, #F4CE14 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    maxWidth: "400px",
    textShadow: "1px 1px 3px rgba(0,0,0,0.25)",
  },
  form: {
    display: "flex",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    borderRadius: "50px",
    overflow: "hidden",
  },
  input: {
    flex: 1,
    padding: "0.75rem 1.5rem",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    borderRadius: "50px 0 0 50px",
  },
  button: {
    backgroundColor: "#F4CE14",
    border: "none",
    padding: "0 2rem",
    color: "#495E57",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "0 50px 50px 0",
    transition: "background-color 0.3s ease",
  },
};
