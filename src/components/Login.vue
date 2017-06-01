<template>
	<div id="login">
		<h1>登陆</h1>
	    <label><span>账号：</span><input placeholder="请输入账号" v-model="loginUP.account"></label> 
	    <label><span>密码：</span><input type="password" placeholder="请输入密码"  v-model="loginUP.password"></label>
	    <button type="submit" @click="login">登录</button>
	</div>
</template>
<script>
	import {mapActions,mapGetters} from 'vuex'

	export default {
	  name: 'login',
	  computed:mapGetters([
	    'loginUP'
	  ]),
	  methods:mapActions([
	    'login'
	  ])
	}
</script>
<style>
	
</style>