const dbConnect = require ( "./mongodb")

// async function updateData(){
//     const database = await dbConnect('users', 'myuser') //return promise
//     // const updatedata = await database.updateOne({},{}) //one for match second object for update
//     const updatedata = await database.updateOne({name : "amit"}, {$set : {course : "DDT"}})
//     console.log(updatedata)
//     if (updatedata.acknowledged){
//         console.log("data updated")

//     }

// }



// function remaking for using api


async function updateData(queryfromBrowser, updatefrombrowser){
    let database = await dbConnect('users', 'myuser')
    let updatedata = await database.updateOne(queryfromBrowser, {$set : updatefrombrowser})
    return updatedata
}



module.exports = updateData