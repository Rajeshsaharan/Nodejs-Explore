const dbConnect = require('./mongoose')


async function insertData(){
    const myModel = await dbConnect('users', 'myuser')
    const insertdata = await myModel({name :"gaurav", age : 23, course : "brt"}).save()
    console.log(insertdata)

}

module.exports = insertData