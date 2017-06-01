<template>
	<div id="edit">
		<table class="edit_list" border="0" cellspacing="0" cellpadding="0">
			<tr class="first">
				<th>ID</th>
				<th>用户名</th>
				<th>修改</th>
				<th>删除</th>
			</tr>
			<tr v-for="(userDataVal,index) in showUserDate" >
				<td v-text="index"></td>
				<td v-text="userDataVal.account" ></td>
				<router-link :to="{ name: 'alter', params: { userId: index }}" tag="td" @click.native="getUserDate">修改</router-link>
				<td @click="getDelete(index)">删除</td>
			</tr>
		</table>
		<div id="alter_template" v-show="showAlter">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name:'edit',
		computed:mapGetters([
			'showUserDate',
			'showAlter'
		]),
		methods:mapActions([
			'getUserDate',
			'getDelete'
		]),
		mounted(){
			this.getUserDate();
		}
	}
</script>
<style>
	
</style>	