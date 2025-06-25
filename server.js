import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';

//import authRoutes from './routes/auth.js'; //TODO: completar ruta
//import userRoutes from './routes/user.js'; //TODO: completar ruta

import errorHandler from './src/middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT =  process.env.PORT || 3000; 

// Configuración de CORS
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Ruta de salud del servidor
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        success: true,
        message: 'Servidor corriendo correctamente',
        timestamp: new Date().toISOString(),
        environment: process.env.INIT_CWD
    })
});

// Rutas principales
//app.use('/api/auth', authRoutes); //TODO: activar
//app.use('/api/users', userRoutes); //TODO: activar

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(PORT, ()=> {
    console.log(`servidor corriendo en: http://localhost:${PORT}`);
    console.log(`ambiente: ${process.env.INIT_CWD}`);
    console.log('Autenticación activa');
    console.log('Firebase conectado');
});

export default app;
/*
const list = [
    {id:1, name: 'Juan', email: 'juan@gmail.com'},
    {id:2, name: 'Pedro', email: 'pedro@gmail.com'},
    {id:3, name: 'María', email: 'maria@gmail.com'},
    {id:4, name: 'Ana', email: 'ana@gmail.com'},
    {id:5, name: 'Luis', email: 'luis@gmail.com'},
    {id:6, name: 'Luis', email: 'luisito@gmail.com'}

]


app.get("/welcome",(req,res)=> {
    res.send(`
    <h1> Bienvenido a mi servidor </h1>
    <p> Este servidor se esta ejecutando en el puerto ${PORT} </p>
    
    `)
})

app.get("/list",(req,res)=> {
    res.json(list)
})

app.get("/list/:id",(req,res)=> {
    const {id} = req.params
    const user = list.find(item => item.id == id)
    res.json(user)
})

app.get("/",(req,res) => {
    const {name, email, ...qs} = req.query
    let data = []
    if(name) {
        data = list.filter(item => item.name.toLocaleLowerCase().includes(name))
        console.log(name,data)
    }else if (email) {
        data = list.find(item => item.email.toLocaleLowerCase() == name)
        console.log(email,data)
    }else{
        res.json({
            success: false,
            msg: 'objeto no encontrado'
        })
        return;
    }
    res.json({
        success: true,
        data
    })
})

app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Ruta no encontrada',
        message: `La ruta ${req.method} ${req.originalUrl} no existe en este servidor`,
        availableRoutes: [
            'GET /',
            'GET /welcome', 
            'GET /list',
            'GET /list/:id'
        ],
        examples: [
            'http://localhost:3000/',
            'http://localhost:3000/welcome',
            'http://localhost:3000/list',
            'http://localhost:3000/list/1',
            'http://localhost:3000/?name=Luis',
            'http://localhost:3000/?email=gmail.com'
        ],
        timestamp: new Date().toISOString()
    });
});
*/