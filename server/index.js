const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// Allow cross-origin requests
app.use(cors());

// Load designer data
const designers = require("D:/empty cup/server/data/designer.json");

// API route
app.get("/api/designers", (req, res) => {
  res.json(designers);
});

// Default port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
