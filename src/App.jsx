import { useState } from 'react'
import './App.css'

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


  return (
   
    <form>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="email" placeholder="email" value={formData.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <button>Submit</button>
      </form>
  );
}

export default App
