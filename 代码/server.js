var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,  {"Content-Type": "text/plain","charset":"utf-8"}); 
	res.end('我在用Node.js写程序');
}).listen(3000,"127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');