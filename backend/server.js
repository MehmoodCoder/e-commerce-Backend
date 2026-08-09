import app from "./app.js";

import dotenv from "dotenv";

dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
