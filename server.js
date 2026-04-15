require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const authenticate = require('./middleware/auth');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const users = [
  { id: 1, username: "grupo6", password: "grupo6", role: "admin" },
  { id: 2, username: "user", password: "user123", role: "user" }
];

// ====================== LOGIN ======================
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ 
      message: "Credenciales incorrectas. No autorizado." 
    });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.cookie('token', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: 3600000
  });

  res.json({ message: "Login exitoso" });
});

// ====================== RUTA PROTEGIDA ======================
app.get('/protected', authenticate, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'protected.html'));
});

// ====================== LOGOUT ======================
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: "Sesión cerrada correctamente." });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});