'use strict';
var fs=require('fs');
var rs=fs.createReadStream("e:/logs/1.txt");
var ws=fs.createWriteStream("e:/logs/1_w.txt");
rs.pipe(ws);