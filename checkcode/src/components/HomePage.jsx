import React, { useState } from "react";

const HomePage= () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name); 
  };

  return (
    <div style={{ margin: "50px", textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter your name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            style={{
              margin: "10px",
              padding: "5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      {submittedName && (
        <div style={{ marginTop: "20px" }}>
          <h2>Hello, {submittedName}!</h2>
        </div>
      )}
    </div>
  );
};

export default HomePage;
