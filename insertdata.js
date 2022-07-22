//to insert  data to database

const dbConnect = require('./mongodb')

async function insertData(){
    const database = await dbConnect('users', 'myuser') // data is retruned promise
    // const sendData  = await data.insert({name: "lalit", age : 24, course : "BMLT"}) //for single data insert
    // console.log(sendData)
    
    // to insert multiple object use array 
    //example
    const sendData = await database.insert([
        {
            name : "ruchika",
            age : 24,
            course : "brt"
        },
        {
            name : "amit",
            age : 24,
            course : "ECG"
        }
    ])
    if (sendData.acknowledged){
        console.log("data inserted")
    }
}

module.exports = insertData