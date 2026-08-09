import app from "./app.js";

import ConnectDB from "./connectDB.js";

import dotenv from "dotenv";

dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT || 5000;

ConnectDB(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.error("Database connection failure:", error);
  });

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
