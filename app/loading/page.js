"use client";

export default function LoadingPage() {
  return (
    <div className="container">
      <div className="lemon"></div>
      <h1>Preparing something fresh…</h1>

      <style jsx>{`
        .container {
          height: 100vh;
          background: linear-gradient(135deg, #fffde7 0%, #f4ce14 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .lemon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #fff176, #fbc02d);
          border: 6px solid #495E57;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          animation: spin 3s linear infinite;
          margin-bottom: 30px;
        }

        h1 {
          color: #495E57;
          font-size: 1.5rem;
          font-weight: 600;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
