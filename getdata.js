
//to get data from database

const dbConnect = require('./mongodb')


// console.log(dbConnect('users', 'myuser')) //as we know function or variable return Promise cant console direct we can apply .then or async or await fuction on it
 

async function getData(){
    const database = await dbConnect("users", "myuser") // give db.collection(collectionName) as Promise
    const getdata = await database.find({}).toArray() // data is now promise 
    console.log(getdata)
}
    
//we cannt use await direct so we  shouldn use async function with it always

// jab bhi koi variable or function Promise return kare to usee .then() ya async await function se handle kare !!!important

module.exports = getData