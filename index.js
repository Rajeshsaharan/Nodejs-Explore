console.log("middleware details")
const { request } = require('express')
const express = require('express')
const app = express()
// application level middleware for all routes

const requestFilter = (request, response, next)=>{
    //next will procced next
   if(!request.query.age){
       response.send("get out fucking here")

   }else if(request.query.age < 18){
       response.send("please old more")
   }else{
       next()
   }
}


 

//how to use requestFilter 
app.use(requestFilter)


app.get('', (request, response)=>{
    response.send("data by response body in / route")
})



app.get('/about', (request, response)=>{
    response.send("data by response body in /about route")
})


app.get('/contact', (request, response)=>{
    response.send("data by response body in /contact route")
})



app.listen(5000)