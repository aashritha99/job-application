require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* 🔴 MIDDLEWARE — MUST BE BEFORE ROUTES */
app.use(cors());
app.use(express.json());

/* 🔴 TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* 🔴 MODEL */
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
});
const Lead = mongoose.model("Lead", LeadSchema);

/* 🔴 ROUTE */
app.post("/api/leads", async (req, res) => {
  console.log("📦 BODY:", req.body);

  try {
    const lead = new Lead(req.body);
    const saved = await lead.save();

    console.log("✅ SAVED:", saved);
    res.status(201).json({ message: "Saved" });
  } catch (err) {
    console.error("❌ ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

/* 🔴 DB CONNECT */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

/* 🔴 SERVER */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
