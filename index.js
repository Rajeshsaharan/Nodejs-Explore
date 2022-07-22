const dbConnect = require('./mongodb')


// console.log(dbConnect('users', 'myuser')) //as we know function or variable return Promise cant console direct we can apply .then or async or await fuction on it
 

async function getdata(){
    let data = await dbConnect("users", "myuser")
    console.log(data)
}
    

getdata()

// jab bhi koi variable or function Promise return kare to usee .then() ya async await function se handle kare !!!important