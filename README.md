# API de Productos con Firebase

Una API RESTful desarrollada con Node.js, Express y Firebase Firestore que permite gestionar productos con autenticación JWT.

## 🚀 Características

- **CRUD completo de productos** - Crear, leer, actualizar y eliminar productos
- **Autenticación JWT** - Sistema de autenticación basado en tokens
- **Firebase Firestore** - Base de datos NoSQL en la nube
- **Middleware de autenticación** - Protección de rutas sensibles
- **Manejo de errores** - Respuestas consistentes y manejo robusto de errores
- **Arquitectura MVC** - Separación clara de responsabilidades

## 📋 Requisitos iniciales

- Node.js (v14 o superior)
- npm o yarn
- Cuenta de Firebase con proyecto configurado
- Firestore habilitado en el proyecto de Firebase

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd nodejs
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Completa el archivo `.env` con tus datos:
```env
PORT=3000

EMAIL=tu-email@ejemplo.com
PASSWORD=tu-password-seguro

JWT_SECRET=tu-secreto-jwt-muy-seguro
JWT_EXPIRES_IN=1h

FIREBASE_API_KEY=tu-api-key
FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu-proyecto-id
FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=1:123456789:web:abc123def456
```

5. Inicia el servidor:
```bash
# Desarrollo
npm run dev

# Producción
npm start
```

## 🌐 Configuración de Firebase

1. Ve a la [Consola de Firebase](https://console.firebase.google.com)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita Firestore Database
4. Ve a la configuración del proyecto y copia las credenciales al archivo `.env`
5. Crea una colección llamada `products` en Firestore

## 📚 Uso de la API

### Autenticación

#### Iniciar sesión
```http
POST /auth/login
Content-Type: application/json

{
  "email": "tu-email@ejemplo.com",
  "password": "tu-password"
}
```

**Respuesta exitosa:**
```json
{
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Productos (Rutas protegidas)

> **Nota:** Todas las rutas de productos requieren el header de autorización:
> `Authorization: Bearer <token>`

#### Obtener todos los productos
```http
GET /api/products
Authorization: Bearer <token>
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": "producto-id-1",
      "name": "Producto 1",
      "price": 100,
      "description": "Descripción del producto"
    }
  ],
  "count": 1
}
```

#### Obtener producto por ID
```http
GET /api/products/:id
Authorization: Bearer <token>
```

#### Crear nuevo producto
```http
POST /api/products/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Nuevo Producto",
  "price": 150,
  "description": "Descripción del nuevo producto",
  "category": "Categoría"
}
```

#### Eliminar producto
```http
DELETE /api/products/:id
Authorization: Bearer <token>
```

## 📁 Estructura del Proyecto

```
.
├── src/
│   ├── config/
│   │   └── firebase.js          # Configuración de Firebase
│   ├── controllers/
│   │   ├── auth.controller.js   # Controlador de autenticación
│   │   └── products.controller.js # Controlador de productos
│   ├── middlewares/
│   │   └── auth.middleware.js   # Middleware de autenticación JWT
│   ├── models/
│   │   └── product.model.js     # Modelo de productos (Firestore)
│   ├── routes/
│   │   ├── auth.routes.js       # Rutas de autenticación
│   │   └── products.routes.js   # Rutas de productos
│   └── services/
│       ├── auth.service.js      # Lógica de negocio de auth
│       └── products.service.js  # Lógica de negocio de productos
├── index.js                     # Punto de entrada de la aplicación
├── package.json
├── .env.example                 # Ejemplo de variables de entorno
└── README.md
```

## 🛡️ Seguridad

- **JWT Tokens** - Autenticación basada en tokens con expiración configurable
- **Variables de entorno** - Credenciales sensibles protegidas
- **Middleware de autenticación** - Verificación de tokens en rutas protegidas
- **Validación de datos** - Validación básica de entrada en controladores

## ⚠️ Manejo de Errores

La API devuelve respuestas consistentes con el siguiente formato:

**Respuesta exitosa:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Mensaje opcional"
}
```

**Respuesta de error:**
```json
{
  "success": false,
  "error": "Descripción del error"
}
```

### Códigos de Estado HTTP

- `200` - OK (operación exitosa)
- `201` - Created (recurso creado)
- `204` - No Content (eliminación exitosa)
- `400` - Bad Request (datos inválidos)
- `401` - Unauthorized (no autenticado)
- `403` - Forbidden (token inválido)
- `404` - Not Found (recurso no encontrado)
- `500` - Internal Server Error (error del servidor)

## 🚀 Scripts Disponibles

```bash
npm start      # Inicia el servidor en modo producción
npm run dev    # Inicia el servidor en modo desarrollo con nodemon
npm test       # Ejecuta las pruebas (no implementadas)
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `package.json` para más detalles.

## 👨‍💻 Autor

**Nico Zalazar**

## 📞 Soporte

Si encuentras algún problema o tienes preguntas, por favor abre un issue en el repositorio.

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!
