const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const authRoutes = require("./routes/auth"); // Adjust the path if necessary
require("dotenv").config(); // Load environment variables from .env file

const app = express();
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Middleware to parse JSON request bodies

// MongoDB connection using environment variable
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use the auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8080; // Use PORT from .env or default to 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Updated to use the correct variable
});
