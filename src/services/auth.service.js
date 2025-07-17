import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const FAKE_USER = {
  email: 'admin@empresa.com',
  password: '123456'
};

export const login = (email, password) => {
  if (email === FAKE_USER.email && password === FAKE_USER.password) {
    const payload = { email }; // Podés incluir más info si querés
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1h'
    });
    return token;
  }
  return null;
};
