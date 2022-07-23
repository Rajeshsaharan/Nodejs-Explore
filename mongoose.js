const mongoose = require('mongoose')

// moongose also provide feature we can override data over the database 


const dbConnect = async(dbName, dbNameCollection) =>{
    const database = await mongoose.connect(`mongodb://localhost:27017/${dbName}`)
    const mySchema = new mongoose.Schema({ //schema IS used for validation
            name: String, //define here validation of database
            age : Number,
            course : String
    })

    // const myuserModel = new mongoose.model(collectionname, myschema)
    const myModel = new mongoose.model(dbNameCollection, mySchema) //model for schema
    // let data = myuserModel({name: "rahul sharam", age : 24, course : "mmbs-pg"})
    return myModel;
    // let result = await data.save()
    // console.log(result)

}


module.exports = dbConnect