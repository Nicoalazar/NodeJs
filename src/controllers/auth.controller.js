import * as authService from '../services/auth.service.js';

export const login = (req, res) => {
  const { email, password } = req.body;
  const token = authService.login(email, password);

  if (token) {
    res.json({ token: `Bearer ${token}` });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
};
