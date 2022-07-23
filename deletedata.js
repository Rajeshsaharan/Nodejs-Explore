const dbConnect  = require("./mongoose")


async function deleteData(){

    const myModel = await dbConnect ('users', 'myuser')
    const deletedata = await myModel.deleteOne({name : "raj"})
    console.log(deletedata)
}

module.exports = deleteData