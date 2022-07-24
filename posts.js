const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title : String,
    body : String  
})

const postModel = new mongoose.model('posts', postSchema)

module.exports = postModel