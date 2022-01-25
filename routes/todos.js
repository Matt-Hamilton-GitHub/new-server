import express from "express";
const router = express.Router();
import db from '../models/todo.js'

router.get('/', (req,res)=>res.send('Hello from the router'))

router.post('/api/todos', (req, res)=>{
    const dbCard = req.body;
    
    db.create(dbCard, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})




export default router