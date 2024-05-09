const express=require('express');

const server=express();

server .get('/',(req,res)=>{
    res.send("<h1>Oii ExpressJs</h1>")
})

server .get('/sobre',(req,res)=>{
    res.send("<h2>Somos quem podemos ser!!</h2>")
})

server .get('/json',(req,res)=>{
    res.send({'nome':"Alcebiades"});
})

server.use((req,res)=>{
    req.statusCode(404).send('erro mano!!');
})

server.listen(3000);