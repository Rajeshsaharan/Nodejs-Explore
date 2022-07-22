const dbConnect = require ( "./mongodb")

async function updateData(){
    const database = await dbConnect('users', 'myuser') //return promise
    // const updateData = await database.updateOne({},{}) //one for match second object for update
    const updateData = await database.updateOne({name : "amit"}, {$set : {course : "DDT"}})
    console.log(updateData)
    if (updateData.acknowledged){
        console.log("data updated")

    }
}



module.exports = updateData