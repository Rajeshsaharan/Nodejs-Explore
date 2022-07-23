const deleteData = require('./deletedata')
const getData = require('./getdata')
const insertData = require ("./insertdata")
const updateData = require('./updatedata')

const express = require('express')
const { request } = require('express')
const { response } = require('express')
const app = express()


// app.get('',callback) data get by browser

app.get('/', async(request, response)=>{
    const getdata = await getData() // getData return Promise that can handled by await or async fucntion 
    console.log(getdata)
    response.send(getdata) //getdata returns from getData function returns
})

app.listen(5000)


//data post by browser
app.use(express.json()) // to convert object to json

app.post('/', async(request, response)=>{
    const dataFromBrowser = request.body
    console.log(dataFromBrowser)
    const insertdata = await insertData(dataFromBrowser) // beacuse insertData return
    response.send("data is inserted successfully")
    console.log(insertdata)
})


//put(update api method ) from browser

app.put('/', async(request, response)=>{
    const dataFromBrowser = request.body // we pass two object mainn object {{}, {}}
    //we can also recieve params from query paramas as well but in the case we should update route to '/' to '/:(key that we want to query)'
    // console.log(dataFromBrowser)
    const {queryfromBrowser, updatefromBrowser} = dataFromBrowser //object destructre
    // console.log(queryfromBrowser)
    // console.log(updatefromBrowser)
    const updatedata = await updateData(queryfromBrowser, updatefromBrowser)
    // console.log(updatedata)
    response.send("data is updated")
})


// delete method from browser

app.delete('/:id', async(request, response)=>{
    //id can be access by query parama -- watch notes one time
    const id = request.params.id
    console.log(id)
    const deletedata = await deleteData(id)
    response.send(deletedata)
})

