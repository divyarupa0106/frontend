import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Update from "./components/Update";
import Delete from "./components/Delete";

function App() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(to bottom right, #e3f2fd, #e1f5fe);
          font-family: "Poppins", sans-serif;
        }

        .app-header {
          text-align: center;
          background-color: #1976d2;
          color: white;
          padding: 20px 0;
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 1px;
          box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
          margin-bottom: 25px;
        }

        nav {
          display: flex;
          justify-content: center;
          gap: 35px;
          background-color: #bbdefb;
          padding: 15px 0;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(100, 181, 246, 0.3);
          margin: 0 50px 40px 50px;
        }

        nav a {
          text-decoration: none;
          color: #0d47a1;
          font-weight: 600;
          font-size: 18px;
          transition: 0.3s;
          padding: 8px 16px;
          border-radius: 6px;
        }

        nav a:hover {
          background-color: #1976d2;
          color: white;
          transform: scale(1.1);
        }
      `}</style>

      <div>
        <header className="app-header">Car Rental Booking System</header>

        <nav>
          <Link to="/">View Cars</Link>
          <Link to="/add">Add Car</Link>
          <Link to="/update">Update Car</Link>
          <Link to="/delete">Delete Car</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
