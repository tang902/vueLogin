const models=require('./db');
const express=require('express');
const router=express.Router();
// 这里的req.body能够使用就在index.js中引入了
const bosyParser=require('body-parser');

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
router.post('/api/login/createAccount',(request,response)=>{
	let newAccount=new models.Login({
		account:request.body.account,
		password:request.body.password
	});
	// 保存数据newAccount数据进mongoDB
	newAccount.save((err,data)=>{
		if(err){
			response.send(err);
		}else{
			response.send(data);
		}
	});
});

router.post('/api/login/alterAccount',(request,response)=>{
	models.Login.update({_id:request.body.ID},{
			account:request.body.account,
			password:request.body.password
	},(error,data)=>{
		if(error){
			response.send(error);
		}else{
			response.send(data);
		}
	});
});

router.post('/api/login/deleteAccount',(request,response)=>{
	models.Login.remove({_id:request.body.ID},(error,data)=>{
		if(error){
			response.send(error);
		}else{
			response.send(data);
		}
	})
})


router.get('/api/login/getAccount',(request,response)=>{
	// 通过模型去查找数据库
	models.Login.find((err,data)=>{
		if(err){
			response.send(err);
		}else{
			response.send(data);
		}
	});
});

module.exports=router;