// pages/loading.js
"use client";
import Head from "next/head";
import { use } from "react";

export default function Loading() {
  return (
    <>
      <Head>
        <title>Loading | LittilLemon</title>
      </Head>
      <div className="loading-container">
        <div className="lemon"></div>
        <div className="drops">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1>Preparing Something Fresh<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></h1>

        <style jsx>{`
          .loading-container {
            height: 100vh;
            background: linear-gradient(135deg, #fffde7 0%, #f4ce14 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            overflow: hidden;
          }

          .lemon {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #fff176, #fbc02d);
            border: 6px solid #495E57;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            animation: popIn 1.5s ease-in-out infinite alternate;
          }

          .drops {
            display: flex;
            gap: 10px;
            margin: 20px 0;
          }

          .drops span {
            width: 12px;
            height: 12px;
            background: #495E57;
            border-radius: 50%;
            animation: drop 1s infinite ease-in-out;
          }

          .drops span:nth-child(2) {
            animation-delay: 0.2s;
          }

          .drops span:nth-child(3) {
            animation-delay: 0.4s;
          }

          h1 {
            color: #495E57;
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 10px;
            display: flex;
            gap: 5px;
            align-items: center;
            animation: fadeIn 1s ease-in-out;
          }

          .dot {
            animation: blink 1.5s infinite;
          }

          .dot:nth-child(2) {
            animation-delay: 0.2s;
          }

          .dot:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes popIn {
            0% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1.1) rotate(5deg);
            }
          }

          @keyframes drop {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(10px);
              opacity: 0.5;
            }
          }

          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </>
  );
}
