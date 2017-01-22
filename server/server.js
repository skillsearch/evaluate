var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/api/getdata',function(req, res) {
    res.json([
        {'id': 1, 'name': 'qwe1'},
        {'id': 2, 'name': 'qwe2'},
        {'id': 3, 'name': 'qwe3'}
    ]);
});

app.get("/api/questions", (req, res) => {
    const questions = require("./questions.json").questions;  
    res.send(questions);  
});

app.listen(port, function(err){
    if (!err) {
        // open('http://localhost:' + port);
        console.log('Express is running...');
    } else {
        console.log(err);
    }
});