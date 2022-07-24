const bcrypt = require('bcrypt')
require("dotenv").config();
const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
mongoose.pluralize(null)  
const jwt = require('jsonwebtoken')
// const res = require('express/lib/response')
const User = require('./users') //gives Model of any database
const Post = require('./posts')
const { request } = require('express')
const { response } = require('express')
const app = express()
const  verifyToken = require('./middlewareAuth')


app.use(express.json()) //to conert data to json format 


app.get('/', async(request, response)=>{
    
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    let data = await Post.find({})
    response.send(data)
    


})

//create data

app.post("/create", verifyToken, async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    try{
        const insertdata = await Post(request.body).save()
        response.send({insertdata, user: request.user})
        console.log(insertdata)
    }catch(error){
        response.send({error})
    }
})


app.put('/update/:id', async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    console.log(request.body)
    // to convert id string value to object if of mongoose we can use mongoose.TYpes.ObjectId
    const updatedata = await Post.updateOne({_id :  mongoose.Types.ObjectId(request.params.id)},{$set : request.body})
    response.send(updatedata)

} )

app.delete('/delete/:id', async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDb`)
    const deletedata = await Post.deleteOne({_id: mongoose.Types.ObjectId(request.params.id)})
    return response.send(deletedata)
})


app.post("/signin", async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    try{
        const hashedPassword = await bcrypt.hash(request.body.password, 10)
        const user = await User.create({username : request.body.username, password : hashedPassword})
        const token = jwt.sign({user_id : user._id, username : user.username}, process.env.ACCESS_SECRET_KEY)
        return response.send({user, token})
    }catch(error){ //will handle duplicate key error 
        console.log(error)
        return response.send({error :error})
    }
    
})

// as we know we use async or await function to handle resolved dtaa returns from an promise we can handle that data but
//what about rejected  data so we can use try catch block to try for resolve data and catch for rejecte data or on error

app.post('/login', async(request,response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    let user = await User.find({username : request.body.username})
    if(user === null){
        return response.send("user not found")
    }
    try{
        const userCheck = await bcrypt.compare(request.body.password, user[0].password)
        if (userCheck){
            const token = jwt.sign({user_id: user[0]._id, username: request.body.username}, process.env.ACCESS_SECRET_KEY)
            user.token = token
            return response.send(user)
        }else{
            return response.send("passoword is wrong")
        }

    }catch(error){ // runs on rejection promise //error from bcrypt.compare Promise
        response.send(error)
    }
})  
app.listen(5000)