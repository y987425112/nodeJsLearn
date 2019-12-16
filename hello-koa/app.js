'use strict'

const Koa=require('koa');
const router=require('koa-router')();
const bodyparser=require('koa-bodyparser');
const app=new Koa();

/*
app.use(async(ctx,next)=>{
	await next();
	ctx.response.type='text/html';
	ctx.response.body='hello koa';

});
*/

app.use(async(ctx,next)=>{
	console.log(ctx.request.method+""+ctx.request.url);
	await next();
});

router.get("/hello/:name",async(ctx,next)=>{
	var name=ctx.params.name;
	ctx.response.body= `hello ${name}`; 
});
router.get('/', async (ctx, next) => {
 ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;});
/*
router.get("/",async(ctx,next)=>{
	
})
*/
router.post('/signin',(ctx,next)=>{
	var name=ctx.request.body.name||'';
	var password=ctx.request.body.password;
	ctx.response.body='welcome '+name;

})
app.use(bodyparser());
app.use(router.routes());


console.log('__dirname :'+__dirname )
app.listen(8080);
console.log("koa start");



