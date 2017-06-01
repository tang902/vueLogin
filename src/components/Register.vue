<template>
	<div id="register">
		<h1>注册</h1>
	    <label><span>账号：</span><input placeholder="请输入账号" v-model="registerUP.account"></label> 
	    <label><span>密码：</span><input type="password" placeholder="请输入密码" v-model="registerUP.password"></label>
	    <button type="submit" @click="register">注册</button>
	</div>
</template>
<script>
	import {mapActions,mapGetters} from 'vuex'

	export default {
	  name: 'register',
	  computed:mapGetters([
	    'registerUP'
	  ]),
	  methods:mapActions([
	    'register'
	  ])
	}
</script>
<style>
	
</style>