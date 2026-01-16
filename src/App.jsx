import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔴 MUST BE HERE

    console.log("🚀 SENDING:", formData);

    await fetch("http://localhost:5000/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Submitted");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Test Form</h1>

      {/* 🔴 THIS IS CRITICAL */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
