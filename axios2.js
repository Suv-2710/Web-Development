import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State variables
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data when component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data); // store API data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again!");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", marginTop: "30px" }}>
      <h2 style={{ color: "#007bff" }}>React Axios API Fetch Example</h2>

      {/* Loading State */}
      {loading && <p>Loading data...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Data */}
      {!loading && !error && (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px"
        }}>
          {users.map((user) => (
            <div key={user.id} style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "250px",
              textAlign: "left",
              backgroundColor: "#f8f9fa"
            }}>
              <h4>{user.name}</h4>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>City:</strong> {user.address.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;