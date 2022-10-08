const express = require('express');
const { mongoconnect } = require('./db/db');
const {fetchvideos}= require('./services/videos')


const app = express();
app.use(express.json());


const PORT = 8000||process.env.PORT


async function startserver(){
    await mongoconnect();
    await fetchvideos();
}

startserver();

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})







