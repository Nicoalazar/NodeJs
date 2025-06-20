import express from 'express'
const app = express();

const list = [
    {id:1, name: 'Juan', email: 'juan@gmail.com'},
    {id:2, name: 'Pedro', email: 'pedro@gmail.com'},
    {id:3, name: 'María', email: 'maria@gmail.com'},
    {id:4, name: 'Ana', email: 'ana@gmail.com'},
    {id:5, name: 'Luis', email: 'luis@gmail.com'}
]

app.get("/welcome",(req,res)=> {
    res.send(`
    <h1> Bienvenido a mi servidor </h1>
    `)
})

app.get("/list",(req,res)=> {
    res.json(list)
})

const PORT =  3000; 

app.listen(PORT, ()=> console.log(`servidor corriendo en: http://localhost:${PORT}`));