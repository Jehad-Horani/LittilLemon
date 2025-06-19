// pages/about.js

import Head from "next/head";
import Footersec from "../components/Footer";

export default async function About() {
         await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
  return (
    <>
      <Head>
        <title>About - LittilLemon</title>
        <meta name="description" content="Learn more about LittilLemon Restaurant" />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.heading}>About LittilLemon</h1>
        <p style={styles.paragraph}>
          LittilLemon is a charming family-owned restaurant located in the heart of Chicago. 
          We pride ourselves on serving delicious Mediterranean cuisine made with fresh, local ingredients.
        </p>
        <p style={styles.paragraph}>
          Our mission is to create a warm and inviting atmosphere where every guest feels at home while enjoying exceptional food.
        </p>
        <p style={styles.paragraph}>
          Come visit us to experience authentic flavors and friendly service.
        </p>
      </main>
      <br/><br/>
      <Footersec/>
    </>
  );
}

const styles = {
  main: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: "1.6",
  },
  heading: {
    color: "#495E57",
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  paragraph: {
    marginBottom: "16px",
    fontSize: "1.125rem",
  },
};
