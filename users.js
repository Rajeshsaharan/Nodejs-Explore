const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username : {type : String, unique : true},
    password : String,
})

module.exports = new mongoose.model('users', userSchema )
