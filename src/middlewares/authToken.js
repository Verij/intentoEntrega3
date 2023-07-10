import jwt from "jsonwebtoken";
import config from '../config';
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
try {
    const token = req.headers["token-acceso"]

  if (!token) return res.status(403).json({message: "No token provided"})

  const decoded = jwt.verify(token, config.SECRET);
  req.userId = decoded.id;

  const user = await User.findById(req.userId, {password: 0})
  if(!user) return res.status(404).json({message: 'no user found'})

  console.log(user);

  next()
  
} catch (error) {
  return res.status(401).json({message: 'no autorizado'})
  
}
};