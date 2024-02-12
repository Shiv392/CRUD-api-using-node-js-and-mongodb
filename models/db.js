const express=require('express');
const mongooese=require('mongoose');
const dbconnection=require('../connection.js');
const env=require('dotenv');
env.config();

dbconnection.connect().then(res=>console.log('mvc**database connection successfull'))
.catch(err=>console.log('error while coneecting with database***',err))


const usermodel=mongooese.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    jobtitle:{
        type:String,
        required:true
    },
    gender:{
        type:String
    }
});

module.exports={usermodel}