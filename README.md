# 🔐 Sistema de Autenticación con JWT

Proyecto de autenticación segura desarrollado con **Express.js**, **JWT** y **Cookies**.

---

## ✨ Características

- Autenticación mediante **JSON Web Tokens (JWT)**
- Cookies seguras con `httpOnly` y `sameSite: strict`
- Middleware personalizado para proteger rutas
- Validación correcta de tokens
- Interfaz limpia y moderna
- Funcionalidad completa de Logout
- Manejo de errores adecuado

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** + **Express**
- **jsonwebtoken** - Generación y verificación de tokens
- **cookie-parser** - Manejo de cookies
- **dotenv** - Variables de entorno
- HTML, CSS y JavaScript (Frontend)

---

## 📁 Estructura del Proyecto
express-jwt-auth/
├── public/
│   ├── index.html          ← Pantalla de Login
│   └── protected.html      ← Página protegida (diseño bonito)
├── middleware/
│   └── auth.js             ← Middleware de autenticación
├── server.js               ← Servidor principal
├── .env                    ← Clave secreta JWT
├── package.json
└── README.md


---

## 🚀 Cómo Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar el servidor en modo desarrollo
npm run dev
Usuario,Contraseña,Rol
grupo6,grupo6,admin
user,user123,user

🧪 Pruebas Realizadas

Login exitoso y fallido
Acceso a ruta protegida con y sin token
Validación del middleware
Cierre de sesión (Logout)
Persistencia de sesión mediante cookies

