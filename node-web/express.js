'use strict';
var express=require('express');
var app=express();
app.get("/",function(request,response){
	response.send("hello express");
});
app.listen("8080",function(){
	console.log("express start");
});
