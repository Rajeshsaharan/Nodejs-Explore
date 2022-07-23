const dbConnect = require('./mongoose')

async function getData(){
    const myModel = await dbConnect('users', 'myuser')
    const getdata = await myModel.find({})
    console.log(getdata)

}


module.exports = getData