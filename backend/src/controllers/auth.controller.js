import { loginUser } from "../services/auth.service.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password required",
      });
    }
    const token = await loginUser(email, password);

    res.status(200).json({
      success: true,
      token,
    });
  } catch (err) {
    next(err);
  }
};
