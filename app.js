//jshint esversion:6
require("dotenv").config();
const express = require("express");

const app = express();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken); 
 client.messages
 .create({
    body: 'Hey Abimbola, this is your first twilio api message',
    from: '+12027597470',
    to: '+2348058600499'
 })

 .then(message => console.log(message.sid));


 app.listen("3000", function(){
    console.log("Server Started");
    });