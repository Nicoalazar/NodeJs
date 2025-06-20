import express from 'express'
import cors from 'cors';

const app = express();

const list = [
    {id:1, name: 'Juan', email: 'juan@gmail.com'},
    {id:2, name: 'Pedro', email: 'pedro@gmail.com'},
    {id:3, name: 'María', email: 'maria@gmail.com'},
    {id:4, name: 'Ana', email: 'ana@gmail.com'},
    {id:5, name: 'Luis', email: 'luis@gmail.com'},
    {id:6, name: 'Luis', email: 'luisito@gmail.com'}

]

app.use(cors(
    {
    origin: ['http://localhost:3000', 'https://mi-frontend.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
    }
))

app.get("/welcome",(req,res)=> {
    res.send(`
    <h1> Bienvenido a mi servidor </h1>
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
const PORT =  3000; 

app.listen(PORT, ()=> console.log(`servidor corriendo en: http://localhost:${PORT}`));