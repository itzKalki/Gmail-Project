import { User } from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({
        message: "User already exist with this mail",
        success: false,
      });
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePhoto = "https://avatar.iran.liara.run/public/boy";
    await User.create({
      fullname,
      email,
      password: hashedPassword,
      profilePhoto,
    });
    return res.status(201).json({
      message: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({
        message: "Incorrect Email or Password or Try signUp",
        success: false,
      });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Incorrect Password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `${user.fullname} logged in successfully.`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
export const logout = async (req, res) => {
  try {
    // Clear the token cookie by setting its maxAge to 0
    res.cookie("token", "", { maxAge: 0 });

    // Send the JSON response after setting the cookie
    return res.status(200).json({
      message: "Logged Out Successfully. Kindly close the window",
    });
  } catch (error) {
    console.log(error);
    // Handle error response if needed
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
