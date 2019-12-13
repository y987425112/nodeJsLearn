let http=require("http")
let fs=require("fs")
http.createServer((req,res)=>{
//	console.log("hello world");
	//res.write("hello world");
//console.log(req);
var url=req.url
	console.log("url:"+url);
fs.readFile(url,(err,data)=>{
	console.log("err"+err);
	res.end(data);
})
//	res.end();

}).listen(8080)