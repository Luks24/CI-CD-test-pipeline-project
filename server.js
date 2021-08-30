'use strict';

const express = require('express');

// Constants


const textArray = ["Hey, welcome to the GET side of things :)","Oh no, not you again","Are you lost perhaps ?","Someone looks dissapointed","Well how do you like it here ? :)"];

function getTime(){
    const date = new Date();
    date.setHours(date.getHours() + 2);
    const isoDate = date.toISOString();
    return isoDate;
}

function getFunnyQuote(){
    return textArray[Math.floor(Math.random() * textArray.length)]
}
// App
const app = express();
app.get("/:accountId/data", (req, res, next) => {
    res.json({
        accountId: req.params.accountId,
        timestamp: getTime(),
        data: getFunnyQuote() 
    });
   });

app.listen(80, function(){
    console.log("App running");
});

module.exports = {
    getTime,
    getFunnyQuote
}