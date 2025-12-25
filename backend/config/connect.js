require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();


const connect = ()=>{
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected");
    }catch(error){
        console.log(error);
    }
}

module.exports = connect;