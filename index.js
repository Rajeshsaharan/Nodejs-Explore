const bcrypt = require('bcrypt')
const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
mongoose.pluralize(null)  
// const res = require('express/lib/response')
const User = require('./users') //gives Model of any database
const Post = require('./posts')
const { request } = require('express')
const { response } = require('express')
const app = express()


app.use(express.json()) //to conert data to json format 


app.get('/', async(request, response)=>{
    
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    let data = await Post.find({})
    response.send(data)
    


})

//create data

app.post("/create", async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    console.log(request.body )
    const insertdata = await Post(request.body).save()
    response.send(insertdata)
    console.log(insertdata)
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
    response.send(deletedata)
})


app.post("/signin", async(request, response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    const hashedpassword = await bcrypt.hash(request.body.password, 10)
    try{
        const signindata = await User({username : request.body.username, password : hashedpassword}).save()
        // response.send(signindata)
    }catch(error){ //will handle duplicate key error 
        console.log(error)
        response.send({error :error})
    }
    
})

// as we know we use async or await function to handle resolved dtaa returns from an promise we can handle that data but
//what about rejected  data so we can use try catch block to try for resolve data and catch for rejecte data or on error

app.post('/login', async(request,response)=>{
    const database = await mongoose.connect(`mongodb://localhost:27017/myDatabase`)
    const user = await User.find({username : request.body.username})
    if(user === null){
        response.send("user not found")
    }
    try{
        const userCheck = await bcrypt.compare(request.body.password, user[0].password)
        if (userCheck){
            response.send("login success")

        }else{
            response.send("passoword is wrong")
        }

    }catch(error){ // runs on rejection promise //error from bcrypt.compare Promise
        console.log(error)
    }
})  
app.listen(5000)