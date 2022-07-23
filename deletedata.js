const mongodb = require('mongodb');
const dbconnect = require('./mongodb')

// async function deleteData(){
//     const database = await dbconnect('users', 'myuser')
//     const deletedata = await database.deleteOne({name : "ruchika"})
//     console.log(deletedata)
//     if(deleteData.acknowledged){
//         console.log("data is deletd successfuly")
//     }
// }

//function remaking for api handle


async function deleteData(id){
    const database = await dbconnect('users', 'myuser' )
    const deletedata = await  database.deleteOne({_id : new mongodb.ObjectId(id)}) // to delete by id by browser query
    return deletedata;
}

module.exports = deleteData