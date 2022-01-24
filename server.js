import express from "express";
import mongoose from "mongoose";
import todoRoutes from './routes/todos.js'
import db from './models/index.js'
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 9001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=> { db.find()
.then(function(todos){
    res.json(todos);
})
.catch(function(err){
res.send(err);
})

})
app.get('/home', (req,res)=> res.status(200).send('<h1 style="text-align:center">Home Page</h1>'))

app.use('/api/todos', todoRoutes)
app.listen(port,()=>{
    console.log(`the server runs on port: ${port}` );
})