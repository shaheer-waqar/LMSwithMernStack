import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    username,
    email,
    role,
    password: hashedPassword,
  });

  return res.status(200).json({
    message: "User registered successfully",
    user: newUser,
  });
  } catch (error) {
    console.log(error);
  }
  
};

const LoginUser = async (req, res) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }
  
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(400).json({ message: "incorrect email or password" });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      return res.status(400).json({ message: "incorrect email or password" });
    }
  
    //Create JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
    );
  
    return res.json({
      message: "Logged in successfully",
      token,
      role: user.role,
      user: user,
    });
  } catch (error) {
    console.log(error)
  }

};

export { registerUser, LoginUser };
