const { response } = require('express')
const { request } = require('express')
const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
// const res = require('express/lib/response')
const User = require('./users') //gives Model of any database
const app = express()

app.use(express.json()) //to conert data to json format 


app.get('/', async(request, response)=>{
    
    const database = await mongoose.connect(`mongodb://localhost:27017/users`)
    let data = await User.find({})
    response.send(data)
    


})

//create data

app.post("/create", async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/users`)
    console.log(request.body )
    const insertdata = await User(request.body).save()
    response.send(insertdata)
    console.log(insertdata)
})


app.put('/update/:id', async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/users`)
    console.log(request.body)
    // to convert id string value to object if of mongoose we can use mongoose.TYpes.ObjectId
    const updatedata = await User.updateOne({_id :  mongoose.Types.ObjectId(request.params.id)},{$set : request.body})
    response.send(updatedata)

} )

app.delete('/delete/:id', async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/users`)
    const deletedata = await User.deleteOne({_id: mongoose.Types.ObjectId(request.params.id)})
    response.send(deletedata)
})
app.listen(5000)