const express = require('express');
const cron = require('node-cron');
let app = express();
const request = require('request');

cron.schedule("* * * * * *", () => {
    request("http://localhost:3000");
    console.log('calısıyor');
});