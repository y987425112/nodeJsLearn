'use strict';

var fs=require("fs");

//writeFile();
stat();


function stat(){
	fs.stat("e:/logs/1.txt",function(err,stat){
		console.log("isFile:"+stat.isFile());
		console.log("isDirectory:"+stat.isDirectory());
		console.log("size:"+stat.size);
		console.log("birth time:"+stat.birthtime);
		console.log("mtime:"+stat.mtime);
			
	});

}

function writeFile(){
var data="node js 测试写入";
fs.writeFile("e:/logs/1.txt",data,function(err){
	readFile();
});
}

function readFile(){
fs.readFile("e:/logs/1.txt","utf-8",function (err,data){
   console.log("data:"+data);
});
}