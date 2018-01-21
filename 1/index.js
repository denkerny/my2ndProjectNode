
var http = require('http'),
	fs = require('fs');


var server = http.createServer(function(req, res) {
	if (req.url === '/contact') {
		fs.readFile('./index.html', function (err, html) {
   			if (err) {
        		throw err; 
    		}
	    	res.writeHead(200, {"Content-Type": "text/html"});  
	    	res.write(html);  
	    	res.end();  
    	});
	} else if (req.url ==='/stop') {
		console.log('stopped working')
		server.close();
	} else {
	    res.write('Hello World');  
	    res.end();  
	}
}).listen(3000, function() {
		console.log('Go to localhost:3000');
});

