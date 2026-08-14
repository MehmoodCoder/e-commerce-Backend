import mongoose from "mongoose";

async function ConnectDB(url) {
  return await mongoose.connect(url);
}

export default ConnectDB;
