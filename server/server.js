var express = require('express');
var path = require('path');

var port = 3000;
var app = express();

app.get('/api/getdata',function(req, res) {
    res.json([
        {'id': 1, 'name': 'qwe1'},
        {'id': 2, 'name': 'qwe2'},
        {'id': 3, 'name': 'qwe3'}
    ]);
});

app.listen(port, function(err){
    if (!err) {
        console.log('Express is running...');
    } else {
        console.log(err);
    }
});