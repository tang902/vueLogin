const api=require('./api');
const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parser');
const express=require('express');
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(api);
app.use(express.static(path.resolve(__dirname,'../dist')));
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('*',(request,response)=>{
	const html=fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8');
	response.send(html);
})

app.listen(8088);
console.log('success listen······')