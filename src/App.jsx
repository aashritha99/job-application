import { useState } from "react";
import "./App.css";
import Landing from "./components/landing";


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
    e.preventDefault();

    try {
      await fetch(import.meta.env.VITE_API_URL + "/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Thanks! We’ll contact you soon.");
      setFormData({ name: "", email: "", phone: "" }); // clear form
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (

    <div className="App">
      <link  src="public\logo.jpg" className="logo" rel="icon" />

     <Landing />

    <div className="container">
      <h1>Apply Now</h1>
      <p className="subtitle">Leave your details and we’ll get in touch</p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Get Started</button>
      </form>
    </div>
   </div> 
  );
}

export default App;
