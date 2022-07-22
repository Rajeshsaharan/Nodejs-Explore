const dbconnect = require('./mongodb')

async function deleteData(){
    const database = await dbconnect('users', 'myuser')
    const deletedata = await database.deleteOne({name : "ruchika"})
    console.log(deletedata)
    if(deleteData.acknowledged){
        console.log("data is deletd successfuly")
    }
}

module.exports = deleteData