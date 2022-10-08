const {Video} = require('../models/video')
const mongoose = require('mongoose')
const axios = require('axios')
require('dotenv').config();


//function to fetch videos from youtube api related to comptettive programming and sorted in reverse order according to their published time
async function fetchvideos(){
    const response = await axios.get(process.env.YOUTUBE_URL)
    if(response.status!=200)
    {
        console.log('Fetching data failed')
        throw new Error('Fetching videos failed')
    }
    const items = response.data.items

    // iterating over the the first page of videos returned from youtube data api
    for(const item of items)
    {
        //creating  a new video object to be saved in database
        const video = {
            title:item.snippet.title,
            description:item.snippet.description,
            url:item.snippet.thumbnails.medium.url,
            channel:item.snippet.channelTitle,
            createdAt:item.snippet.publishTime
        }
        const newvideo = new Video(video);
        //searching if current video already exists in database
        const file= await Video.findOne({title:video.title});
        if(!file)
        {
            //storing new videos in database
            await newvideo.save();
        }
    }    
}

module.exports = {
    fetchvideos,
}