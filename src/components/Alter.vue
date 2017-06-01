<template>
	<div id="alter">
		<h1>用户修改</h1>
	    <label><span>账号：</span><input placeholder="请输入账号" v-model="updateUser.updateUserStr"></label> 
	    <label><span>密码：</span><input type="password" placeholder="请输入密码" v-model="updateUser.updatePasswordStr"></label>
	    <button type="submit" @click="alter">提交修改</button>
	</div>
</template>
<script>
	import {mapActions,mapGetters} from 'vuex'

	export default {
	  name: 'alter',
	  computed:mapGetters([
	    'updateUser'
	  ]),
	  // beforeRouteEnter(to, from, next){
	  // 	console.log(to);
	  // 	console.log(from);
	  // 	console.log(next)
	  // },
	  methods:mapActions([
	    'alter',
	    'getUser'
	  ]),
	  mounted(){
	  	this.getUser();
	  },
	  watch:{
	  	'$route':'getUser'
	  }
	}
</script>
<style>
	
</style>