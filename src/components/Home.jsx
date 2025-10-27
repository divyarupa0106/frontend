import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleGet = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/cars");
      console.log(resp.data);
      setData(resp.data);
      setMsg(resp.data.msg);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom right, #e3f2fd, #e1f5fe);
          font-family: "Poppins", sans-serif;
        }

        .home-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 60px;
        }

        .home-title {
          color: #1565c0;
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 25px;
        }

        .car-card {
          background-color: #ffffff;
          border: 1px solid #bbdefb;
          border-radius: 12px;
          padding: 20px 25px;
          margin: 10px 0;
          width: 320px;
          box-shadow: 0 3px 10px rgba(100, 181, 246, 0.4);
          text-align: left;
          transition: transform 0.2s, box-shadow 0.3s;
        }

        .car-card:hover {
          transform: scale(1.02);
          box-shadow: 0 5px 15px rgba(33, 150, 243, 0.3);
        }

        .car-id {
          font-weight: 600;
          color: #0d47a1;
        }

        .car-name {
          font-size: 18px;
          color: #1976d2;
          margin-top: 5px;
        }

        .car-qty {
          color: #1e88e5;
          font-size: 15px;
          margin-top: 2px;
        }

        .no-data {
          color: #0d47a1;
          font-size: 20px;
          background-color: #e3f2fd;
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid #bbdefb;
        }

        .msg {
          margin-top: 20px;
          color: #1565c0;
          background-color: #e3f2fd;
          border: 1px solid #bbdefb;
          padding: 10px 15px;
          border-radius: 8px;
          font-weight: 500;
        }
      `}</style>

      <div className="home-container">
        <h1 className="home-title">Available Cars</h1>

        {data && data.length > 0 ? (
          data.map((c) => (
            <div key={c.id} className="car-card">
              <div className="car-id">Car ID: {c.id}</div>
              <div className="car-name">{c.name}</div>
              <div className="car-qty">Available Units: {c.qty}</div>
            </div>
          ))
        ) : (
          <h2 className="no-data">No cars available</h2>
        )}

        {msg && <p className="msg">{msg}</p>}
      </div>
    </>
  );
}

export default Home;
