const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    course : String
})

module.exports = new mongoose.model('myuser', userSchema )
