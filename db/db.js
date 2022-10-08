const mongoose = require('mongoose')
require('dotenv').config();

// function to connect to mongo atlas
async function mongoconnect(){
   await  mongoose.connect(process.env.MONGO_URL,()=>{
        console.log('connected to db')
    });
}

module.exports = {
    mongoconnect
}