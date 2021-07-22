var express = require("express");
var app = express();

app.get("*", function(req, res) {
    res.json({
        title: "Hello World!",
    })
});

var server = app.listen(5320, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Start server on http://%s:%s', host, port)
});
