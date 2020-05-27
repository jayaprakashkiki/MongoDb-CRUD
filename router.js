//imports {third party modules}
const express = require('express');
const myschema = require('./Schema')
const router = express.Router()


//post
router.post('/', async (req, res) => {
    var data = new myschema({  
        Name: req.body.Name, 
        Age: req.body.Age,
        City: req.body.City   
    })  
    console.log(req.body);
    //save
    await data.save();     
    res.json(data)
})


//get
router.get('/',async (req,res)=>{
    const myget = await myschema.find();
    console.log('we got the json',myget);
    res.json(myget)
})


//update
router.put('/update',async(req,res)=>{
    const myupdate =await myschema.update({_id:req.body._id},{$set:{
        Name: req.body.Name, 
        Age: req.body.Age,
        City: req.body.City   
    }})   
    res.json(myupdate)
})

//delete

router.delete('/del/:id',async (req,res)=>{
    const del = await myschema.findByIdAndRemove(req.params.id).then(()=>{
        res.json({messege:'deleted'})
    })
})

//initial router
router.get('/', (req, res) => {
    res.json('Hello Route !')
})

//export router
module.exports = router