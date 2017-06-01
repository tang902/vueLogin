import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

const state={
	user:{
		account:'',
		password:''
	},
	userList:[],
	showAlter:false,
	updateArr:[],
	updateUsers:{
		updateUserStr:'',
		updatePasswordStr:''
	},
	loginShow:false
};

const actions={
	login:({commit,state})=>{
		Axios({
			method:'get',
			url:'/api/login/getAccount'
		}).then((response)=>{
			let loginUserDate=response.data;
			if(loginUserDate.length){
				for(let loginUserItem in loginUserDate){
					if(state.user.account===loginUserDate[loginUserItem].account){
						console.log('用户名正确');
						if(state.user.password===loginUserDate[loginUserItem].password){
							console.log('密码正确');
							state.loginShow=true;
							state.user=[];
						}else{
							alert('密码错误');
						}
					}else{
						alert('用户名错误');
					}
				}
			}
		})
	},
	register:({commit})=>{
		commit('register');
	},
	getUserDate:({commit})=>{
		commit('getUserDate');
	},
	alter:({commit})=>{
		commit('alter');
	},
	getUser:({commit})=>{
		commit('getUser');
	},
	getDelete:({commit,state},index)=>{
		let alterParams={
			ID:state.userList[index]._id
		};
		state.userList.splice(index,1);
		Axios({
			method:'post',
			data:alterParams,
			url:'/api/login/deleteAccount'
		}).then((response)=>{
			state.showAlter=false;
			console.log('删除成功！');
		}).catch((error)=>{
			console.log(error);
		})
	}
}

const mutations={
	register(state){
		let params={
			account:state.user.account,
			password:state.user.password
		};
		Axios({
			method:'post',
			data:params,
			url:'/api/login/createAccount'
		}).then((response)=>{
			console.log(response);
			var userData=response.data;
			state.userList.push(userData);
			state.user.account='';
			state.user.password='';
		}).catch((error)=>{
			console.log(error);
		})
	},
	getUserDate(state){
		Tool.getData(state);
		state.showAlter=true;
	},
	alter(state){
		let alterParams={
			ID:state.updateArr[0]._id,
			account:state.updateUsers.updateUserStr,
			password:state.updateUsers.updatePasswordStr
		};
		Axios({
			method:'post',
			data:alterParams,
			url:'/api/login/alterAccount'
		}).then((response)=>{
			state.userList=[];
			Tool.getData(state);
			state.showAlter=false;
			state.updateUsers.updatePasswordStr='';
			console.log('修改用户成功！')
		}).catch((error)=>{
			console.log(error);
		})
	},
	getUser(state){
		let arrSub=location.hash.replace(/#/,'');
		state.updateArr=[];
		state.updateArr.push(state.userList[arrSub]);
		state.updateUsers.updateUserStr=state.updateArr[0].account;
	}
}

const getters={
	registerUP(state){
		return state.user;
	},
	showAlter(state){
		return state.showAlter
	},
	showUserDate(state){
		return state.userList;
	},
	updateUser(state){
		return state.updateUsers;
	},
	loginShow(state){
		return state.loginShow;
	},
	loginUP(state){
		return state.user;
	}
}


const store=new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});

var Tool={
	getData(state){
		Axios({
			methid:'get',
			url:'/api/login/getAccount'
		}).then((response)=>{
			var userData=response.data;
			var num=state.userList.length;
			for(let userIndex in userData){
				if(num!=0){
					if(userData[userIndex].account==state.userList[userIndex].account){
						break;
					}else{
						state.userList.push(userData[userIndex]);
					}
				}else{
					state.userList.push(userData[userIndex]);
				}
			}
		})
	}
}

export default store;









