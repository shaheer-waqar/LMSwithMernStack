import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    unique: true,
  },
  role:{
    type: "string",
    default: "user",
    enum: ["user", "admin"]
  }
});

export const User = mongoose.model("User", userSchema);

