let http=require("http")
let fs=require("fs")
let item=require("./item.js");
http.createServer((req,res)=>{
//	console.log("hello world");
	//res.write("hello world");
//console.log(req);
var url=req.url
	console.log("url:"+url);
res.end('hello world');
item.addCount();
console.log("count:"+item.count);
//	res.end();

}).listen(8080)