//imports {third party modules}
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')

//initialize {server connectivity}
const app = express()

//initial test router
// app.use('/',(req,res)=>{
//       res.send('localhost connected')    ;   
// })


//middleware -------------
app.use(morgan('dev'))

//express body parser
app.use(express.json())


//local module   
const router = require('./router')
app.use('/info',router)  

app.listen(2000,()=>{
    console.log('Server Started at PORT 2000');
})

//database connectivity
mongoose.connect('mongodb://localhost/crud',{useUnifiedTopology: true ,useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('DB Connected !');
    }else{
        console.log(`Error on DB connectivity ${err}`);
    }
})
   