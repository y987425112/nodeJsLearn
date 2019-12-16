import {count,addCount} from './item2.js'

let http=require("http")
let fs=require("fs")
http.createServer((req,res)=>{
//	console.log("hello world");
	//res.write("hello world");
//console.log(req);
var url=req.url
	console.log("url:"+url);
res.end('hello world');
addCount();
console.log("count:"+count);
//	res.end();

}).listen(8080)