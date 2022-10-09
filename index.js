const express = require('express');
const { ApolloServer,gql } = require('apollo-server-express')
const mongoose = require('mongoose')
require('dotenv').config();
const {fetchvideos}= require('./services/data')
const typeDefs = require('./typeDefs.graphql')
const resolvers = require('./resolvers.graphql')


const PORT = 4000||process.env.PORT

//creating apollo server
const apolloserver = new ApolloServer({typeDefs,resolvers});

const app =express();

async function startserver()
{
    //starting apolloserver
    await apolloserver.start();

    //passing the express app as middleware to apollo server
    apolloserver.applyMiddleware({app})

    //connecting to mongo atlas
    await mongoose.connect(process.env.MONGO_URL,()=>{ console.log('connected')})
}

startserver();

// app.get('/',async(req,res)=>{
//     await fetchvideos();
//     res.send('Hello from express');
// })



app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})








