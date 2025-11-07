import React, { useState } from "react";

function App() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes (Controlled Components)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form before submit
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");
      console.log("User Data:", formData);
      setFormData({ name: "", email: "", password: "" }); // clear form
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", color: "#007bff" }}>User Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        {errors.name && <p style={{ color: "red", fontSize: "0.9em" }}>{errors.name}</p>}

        {/* Email Field */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        {errors.email && <p style={{ color: "red", fontSize: "0.9em" }}>{errors.email}</p>}

        {/* Password Field */}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        {errors.password && <p style={{ color: "red", fontSize: "0.9em" }}>{errors.password}</p>}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;