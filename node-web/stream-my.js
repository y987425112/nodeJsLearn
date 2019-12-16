'use strict';
var fs=require('fs');
//打开一个流

var rs=fs.createReadStream("e:/logs/1.txt");
rs.on('data',function(chunk){
	console.log("chunk:");
	console.log(chunk);
});

rs.on("end",function(){
	console.log("end");
});

rs.on("error",function(error){
	console.log("error:"+error);
});


var ws=fs.createWriteStream("e:/logs/2.txt","utf-8");
ws.write("测试写入");
ws.write("end");
ws.end();


var ws2=fs.createWriteStream("e:/logs/3.txt");
ws2.write(new Buffer("测试buffer写入","utf-8"));
ws2.end();
