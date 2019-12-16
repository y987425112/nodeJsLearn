var count=0;

function addCount(){
	count++;
	console.log("item.count:"+count);
}

module.exports={count: count,addCount:addCount};