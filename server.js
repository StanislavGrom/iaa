const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    global.setTimeout(() => {
        res.json({message: Math.floor(Math.random() * 1000)});
    }, 1000)
    
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
