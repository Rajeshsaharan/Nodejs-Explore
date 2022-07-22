//to create connection to database
const { MongoClient } = require('mongodb') // module import
const url = 'mongodb://localhost:27017' // local mongodb runnig on local machine

const client = new MongoClient(url); ///new object create of client of Mongoclient


module.exports = async function dbConnect(dbName , dbNameCollection){
    let result = await client.connect()
    let db = result.db(dbName)
    let collection = db.collection(dbNameCollection)
    return collection; //promise

    //return onlyb collection to create connectivity
    // let response = await collection.find({}).toArray()
    // return response;

}

//dbConnect returns a Promise object