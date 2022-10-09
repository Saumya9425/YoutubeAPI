const mongoose = require('mongoose')

// structure of video object
const VideoSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    url:{
        type:String,
    },
    channel:{
        type:String,
    },
    createdAt:{
        type:String,
    },
})

const Video = mongoose.model('video',VideoSchema)

module.exports = {
    Video
}