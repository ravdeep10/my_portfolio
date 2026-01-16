import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import { comparePassword } from "../utils/hash.js";
import { env } from "../config/env.js";
import { Error } from "mongoose";

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid Credentials");

  const isMatch = await comparePassword(password, user.passwordHash);
  if (!isMatch) throw new Error("Invalid Credentials");
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  return token;
};
