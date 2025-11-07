import React, { useState } from "react";

// Child Component (receives props)
function Student(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      marginBottom: "10px",
      width: "250px",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
    </div>
  );
}

// Parent Component
function App() {
  // Using useState Hook
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2>React Props and useState Example</h2>

      {/* Passing data via props */}
      <Student name="Vaishu" course="Computer Science" />
      <Student name="Ravi" course="Information Technology" />

      {/* useState example */}
      <h3>Counter: {count}</h3>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "8px 15px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Increase Count
      </button>
    </div>
  );
}

export default App;