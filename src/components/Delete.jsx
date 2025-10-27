import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [msg, setMsg] = useState(null);
  const [carId, setCarId] = useState("");

  const handleDelete = async () => {
    if (!carId.trim()) {
      setMsg("Please enter a valid Car ID.");
      return;
    }

    try {
      const resp = await axios.delete(`https://backend-i3mp.onrender.com/cars/${carId}`);
      setMsg(resp.data.msg);
      setCarId("");
    } catch (e) {
      if (e.response && e.response.status === 404) {
        setMsg("Car not found!");
      } else {
        setMsg("Error deleting car.");
      }
      console.error(e);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom right, #e3f2fd, #bbdefb);
          font-family: "Poppins", sans-serif;
        }

        .delete-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .delete-card {
          background-color: #ffffff;
          padding: 30px 40px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(100, 181, 246, 0.4);
          width: 100%;
          max-width: 400px;
          border: 1px solid #90caf9;
        }

        .delete-title {
          text-align: center;
          color: #1565c0;
          font-size: 28px;
          font-weight: bold;
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
          border: 1px solid #64b5f6;
          border-radius: 8px;
          outline: none;
          transition: 0.2s;
        }

        .input-group input:focus {
          border-color: #1565c0;
          box-shadow: 0 0 5px rgba(21, 101, 192, 0.3);
        }

        .delete-button {
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

        .delete-button:hover {
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

      <div className="delete-container">
        <div className="delete-card">
          <h1 className="delete-title">Delete Car</h1>

          <div className="input-group">
            <label>Car ID</label>
            <input
              type="text"
              value={carId}
              onChange={(e) => setCarId(e.target.value)}
              placeholder="Enter Car ID"
            />
          </div>

          <button className="delete-button" onClick={handleDelete}>
            Delete Car
          </button>

          {msg && <p className="message">{msg}</p>}
        </div>
      </div>
    </>
  );
}

export default Delete;
