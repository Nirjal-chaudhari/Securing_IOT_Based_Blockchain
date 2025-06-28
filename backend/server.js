const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sensorRoutes = require("./routes/sensorRoutes");
const transactionRoutes = require("./routes/transactions");
const { listenToFirebase } = require("./services/firebaseListener");

dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup (only allow requests from frontend)
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST"],        // Allowed methods
  allowedHeaders: ["Content-Type"], // Allowed headers
};

// Use CORS and JSON middleware
app.use(cors(corsOptions));
app.use(express.json());

// Define Routes
app.use("/api/sensors", sensorRoutes);
app.use("/api/transactions", transactionRoutes);

// Firebase Listener - Start listening for new IoT data in Firebase
listenToFirebase();

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
