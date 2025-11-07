import { connect } from "mongoose";

const mongoUrl = process.env.MONGODB_URL;

if (!mongoUrl) {
  throw new Error("MONGODB_URL must be defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

const connectDB = async () => {
  if (cached.conn) {
    console.log("Using existing connection");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connect(mongoUrl).then((c) => c.connection);
    console.log("New connection created");
  }
  try {
    cached.conn = await cached.promise;
    console.log("1st connection created");
  } catch (e) {
    throw e;
  }
  return cached.conn;
};
export default connectDB;
