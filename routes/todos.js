import express from "express";
const router = express.Router();
import db from '../models/index.js'

router.get('/', (req,res)=>res.send('Hello from the router'))

router.post('/', (req,res)=> {db.create(req.body)
.then(function(newTodo){
    res.json(newTodo)
})
.catch(function(err){
res.send(err)
})
});



export default router