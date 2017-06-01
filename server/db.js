// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/test1');

const db = mongoose.connection;

db.once('error',()=>{console.log('Mongodb 连接失败！')});
db.once('open',()=>{console.log('Mongodb 连接成功！')});


const loginSchema=mongoose.Schema({
	account:String,
	password:String
},{
	versionKey:false
})

const Models={
	Login:mongoose.model('Login',loginSchema)
}

module.exports=Models;