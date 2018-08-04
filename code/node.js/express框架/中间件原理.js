let http = require('http');


function express(){
	let fn = [];
	let app = function(req,res,next){

	}
	return app;
}	
let app = express();

var server = http.createServer(app);
server.listen(3000,'127.0.0.1', function(){
	
	console.log("server running in 3000");
})