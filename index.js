console.log("middleware details")
const { request } = require('express')
const express = require('express')
const app = express()
// route level middleware for single routes or routing groups or all route



//importing middleware from middlware module
const requestFilter = require('./middleware')
 

//how to use requestFilter 
// app.use(requestFilter)

//pass as middle args in .get method on that route you want to use middleware


//for use a specific group of route
const route = express.Router() 

route.use(requestFilter) 
 //for use route instance   


// app.get('',requestFilter, (request, response)=>{
//     response.send("data by response body in / route")
// })



// app.get('/about', (request, response)=>{
//     response.send("data by response body in /about route")
// })


// app.get('/contact', requestFilter, (request, response)=>{
//     response.send("data by response body in /contact route")
// })

app.get('', (request, response)=>{ //no middleware because no route instance used
    response.send("data by response body in / route")
})

route.get('/about', (request, response)=>{ //middleware applied because route instance used
    response.send("data by response body in /about route")
})

 


route.get('/pricing', (request, response)=>{ // using middleware using route instance
    response.send("data by response body in /pricing route")
})

app.use('/', route)

app.listen(5000)

