import mongoose from "mongoose";

async function ConnectDB(url) {
  mongoose.connect(url);
}

export default ConnectDB
