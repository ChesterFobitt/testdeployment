const express = require("express");
const app = express();

app.get("*", function(req, res) {
    res.json({
        title: "Hello World!",
    })
});

const server = app.listen(5320, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Start server on http://%s:%s', host, port)
});
