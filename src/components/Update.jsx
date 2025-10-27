import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [msg, setMsg] = useState(null);

  const [car, setCar] = useState({
    id: 0,
    name: "",
    qty: 0,
  });

  const handlePut = async () => {
    try {
      const resp = await axios.put(`https://backend-i3mp.onrender.com/cars/${car.id}`, {
        name: car.name,
        qty: car.qty,
      });
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg(e.response?.data?.msg || "Error updating car details");
      console.error(e);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom right, #e3f2fd, #e1f5fe);
          font-family: "Poppins", sans-serif;
        }

        .update-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .update-card {
          background-color: #ffffff;
          padding: 35px 40px;
          border-radius: 18px;
          box-shadow: 0 4px 25px rgba(100, 181, 246, 0.5);
          width: 100%;
          max-width: 420px;
          border: 1px solid #bbdefb;
        }

        .update-title {
          text-align: center;
          color: #1565c0;
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 25px;
        }

        .input-group {
          margin-bottom: 18px;
        }

        .input-group label {
          display: block;
          font-weight: 500;
          color: #0d47a1;
          margin-bottom: 6px;
        }

        .input-group input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #90caf9;
          border-radius: 8px;
          outline: none;
          transition: 0.2s;
        }

        .input-group input:focus {
          border-color: #1976d2;
          box-shadow: 0 0 6px rgba(33, 150, 243, 0.3);
        }

        .update-button {
          width: 100%;
          padding: 12px;
          background-color: #1976d2;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .update-button:hover {
          background-color: #1565c0;
          transform: scale(1.03);
        }

        .message {
          margin-top: 15px;
          text-align: center;
          color: #0d47a1;
          font-weight: 500;
          background-color: #e3f2fd;
          border: 1px solid #bbdefb;
          padding: 10px;
          border-radius: 6px;
        }
      `}</style>

      <div className="update-container">
        <div className="update-card">
          <h1 className="update-title">Update Car Details</h1>

          <div className="input-group">
            <label>Car ID</label>
            <input
              type="number"
              value={car.id}
              onChange={(e) =>
                setCar({ ...car, id: Number(e.target.value) })
              }
              placeholder="Enter Car ID"
            />
          </div>

          <div className="input-group">
            <label>New Car Name</label>
            <input
              type="text"
              value={car.name}
              onChange={(e) => setCar({ ...car, name: e.target.value })}
              placeholder="Enter New Car Name"
            />
          </div>

          <div className="input-group">
            <label>New Availability</label>
            <input
              type="number"
              value={car.qty}
              onChange={(e) => setCar({ ...car, qty: Number(e.target.value) })}
              placeholder="Enter Available Units"
            />
          </div>

          <button className="update-button" onClick={handlePut}>
            Update Car
          </button>

          {msg && <p className="message">{msg}</p>}
        </div>
      </div>
    </>
  );
}

export default Update;
