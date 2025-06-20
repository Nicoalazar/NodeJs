import express from 'express'
const app = express();

app.get("/",(req,res)=>
res.send("Hola"))

const PORT =  3000; 

app.listen(PORT, ()=> console.log(`servidor corriendo en: http://localhost:${PORT}`));