import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const USER = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD
};

export const login = (email, password) => {
  if (email === USER.email && password === USER.password) {
    const payload = { email }; // Podés incluir más info si querés
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    });
    return token;
  }
  return null;
};
