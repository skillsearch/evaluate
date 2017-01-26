var express = require('express');
var compression = require('compression');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/api/testdata',function(req, res) {
    res.json([
        {'id': 1, 'name': 'qwe1'},
        {'id': 2, 'name': 'qwe2'},
    ]);
});

app.get("/api/questions", (req, res) => {
    const questions = require("./questions.json").questions;  
    res.send(questions);  
});

// For all GET requests, send back index.html so that Angular's PathLocationStrategy can be used.
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
    if (!err) {
        console.log('Express server is running on port ' + port);
    } else {
        console.log(err);
    }
});