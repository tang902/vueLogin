<template>
	<div id="navs">
		<ul class="nav_list"> 
			<router-link to="/login" tag="li">登陆</router-link>
			<router-link to="/register" tag="li">注册</router-link>
			<router-link to="/edit" tag="li" v-show="loginShow">编辑</router-link>
		</ul>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default{
		name:"navs",
		computed:mapGetters([
			'loginShow'
		])
	}
</script>
<style>
	
</style>