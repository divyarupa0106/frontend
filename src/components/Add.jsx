import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [msg, setMsg] = useState(null);
  const [car, setCar] = useState({
    id: "",
    name: "",
    qty: "",
  });

  const handleAdd = async () => {
    if (!car.id || !car.name || !car.qty) {
      setMsg("Please fill in all fields.");
      return;
    }

    try {
      const resp = await axios.post("https://backend-i3mp.onrender.com/cars", {
        id: parseInt(car.id),
        name: car.name.trim(),
        qty: parseInt(car.qty),
      });

      setMsg(resp.data.msg || "Car added successfully!");
      setCar({ id: "", name: "", qty: "" });
    } catch (e) {
      setMsg("Error adding car.");
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

        .add-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .add-card {
          background-color: #ffffff;
          padding: 30px 40px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(100, 181, 246, 0.4);
          width: 100%;
          max-width: 400px;
          border: 1px solid #90caf9;
        }

        .add-title {
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

        .add-button {
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

        .add-button:hover {
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

      <div className="add-container">
        <div className="add-card">
          <h1 className="add-title">Add New Car</h1>

          <div className="input-group">
            <label>Car ID</label>
            <input
              type="number"
              value={car.id}
              onChange={(e) => setCar({ ...car, id: e.target.value })}
              placeholder="Enter Car ID"
            />
          </div>

          <div className="input-group">
            <label>Car Name</label>
            <input
              type="text"
              value={car.name}
              onChange={(e) => setCar({ ...car, name: e.target.value })}
              placeholder="Enter Car Name"
            />
          </div>

          <div className="input-group">
            <label>Quantity</label>
            <input
              type="number"
              value={car.qty}
              onChange={(e) => setCar({ ...car, qty: e.target.value })}
              placeholder="Enter Quantity"
            />
          </div>

          <button className="add-button" onClick={handleAdd}>
            Add Car
          </button>

          {msg && <p className="message">{msg}</p>}
        </div>
      </div>
    </>
  );
}

export default Add;
