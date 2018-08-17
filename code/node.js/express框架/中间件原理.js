let http = require('http');


function express(){
	let fns = [];

	let app = function(req,res){
		let i = 0;
		function next(){
			let fn = fns[i++];
			if (!fn) {
				return;
			}
			fn(req,res,next);
		}
		next();
	}
	app.use = function(fn){
		fns.push(fn);
	}
	return app;
}	
let app = express();

var server = http.createServer(app);
server.listen(3000,'127.0.0.1', function(){
	
	console.log("server running in 3000");
})