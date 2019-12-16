var x = 100;
async function myfunc(param) {
    return new Promise((resolve, reject) => {
        // 模擬
        setTimeout(() => {
            param += 200;
            resolve(param);
        }, 1000);
    })
}
async function myfunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('myfunc2');
    }, 1000);
    });
}
async function test() {
	console.log("test:start()");
	/*
	for(var i=0;i<10;i++){
		console.log(i);
	}
	*/
    await myfunc2();
    console.log('the one step');
    let result = await myfunc(x);
    console.log(result);// 两秒之后会被打印出来
}
test();
console.log('end');