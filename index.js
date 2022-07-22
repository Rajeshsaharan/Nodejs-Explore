console.log("reading about express js")

//import express js in index.js

const express= require('express')
const res = require('express/lib/response')

const app = express()  // express retrun object

//express can be used to save time with  node js

// app.get(route, callback function) 

app.get('', (request, response)=>{
    console.log(request.query) // data from browser
    // response.send("data by response body")
    //we can also use in resonse object
    response.send(`hello ${request.query.name}`)
    
 
})

app.get('/about', (request, response)=>{
    response.send("data by response body in /about route")
})


app.get('/api', (request, response)=>{
    response.send({name: "rajesh", age: 23}) //automatically send as Json data
    
})


 

app.get('*', (request, response)=>{
    response.send("page not found") 
})

app.listen(5000)

// whenever we request something from browser we request object

// how to pass data from as query params in nodejs



