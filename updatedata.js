const dbConnect = require("./mongoose")


async function updateData(){

    const myModel = await dbConnect('users', "myuser")
    // const updatedata = await myModel.updateOne({}for query, {} for update)
    const updatedata = await myModel.updateOne({name : "raj"}, {$set : {name: "raj", age : "24" ,course : "mbbs-pg-nursing"}}) // update or not update but mention all in update object because of mongoose
    console.log(updatedata)
}

module.exports= updateData