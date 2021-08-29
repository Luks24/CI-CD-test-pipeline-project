'use strict';

const express = require('express');

// Constants
const PORT = 8020;
const HOST = 'localhost';

const textArray = ["Hey, welcome to the GET side of things :)","Oh no, not you again","Are you lost perhaps ?","Someone looks dissapointed","Well how do you like it here ? :)"];

// App
const app = express();
app.get("/data", (req, res, next) => {
    res.json({
        accountId: "accountId",
        timestamp: new Date().toISOString(),
        data: textArray[Math.floor(Math.random() * textArray.length)], 
    });
   });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);