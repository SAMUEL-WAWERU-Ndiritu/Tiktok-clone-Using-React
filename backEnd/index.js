import express from 'express'
import mongoose from 'mongoose'
import TiktokData  from './dnCard.js'


//config
const app = express();
const port = process.env.PORT || 8000
const connectUrl = '';


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//database connection

mongoose.connect(connectUrl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//api connection
app.get('/tiktok/data',(req,res)=>{
    TiktokData.find((err,data)=>{
        try{
            res.status(200).send(data);
        }catch(err){
            res.status(500).send(err)
        }
    })
})

app.post('/tiktok/data',(req,res)=>{
    const dbBody = req.body;
    TiktokData.create(dbBody,(err,data)=>{
        try{
            res.status(201).send(data);
        }catch(err){
            res.status(500).send(err)
        }
    })
})


//listen

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})