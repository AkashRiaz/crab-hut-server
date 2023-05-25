const express = require('express');
const foodReview = require('./data/foodReview.json')
const chefAllData = require('./data/chef-all-data.json')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
app.get('/',(req,res)=>{
   res.send('this is testing')
})

app.get('/foodReview',(req,res)=>{
    res.send(foodReview)
})

app.get('/chefAllData',(req,res)=>{
    res.send(chefAllData)
})

app.get('/chefAllData/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const selectedDetails = chefAllData.find(singleData => singleData.id == id)
    res.send(selectedDetails)
})

app.listen(port,()=>{
    console.log('this port is',{port})
})