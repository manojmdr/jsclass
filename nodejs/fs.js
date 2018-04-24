var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    if (req.url == '/write') {

    	console.log('here');
        fs.writeFile('test.txt','this is test page.', function(err, data) {
            if (err) {
                console.log('error detected')
            }

            res.end('file written');
        });
    } else {
        res.end('send');
    }

});
server.listen(7777, function(err, done) {
    if (err) {

    } else {
        console.log('server listening at port 7777');
    }
});