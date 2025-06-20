import express from 'express'
const app = express();

app.get("/ping",(req,res)=> {
    res.send("/pong")
})

const PORT =  3000; 

app.listen(PORT, ()=> console.log(`servidor corriendo en: http://localhost:${PORT}`));