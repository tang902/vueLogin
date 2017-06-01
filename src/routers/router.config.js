import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Edit from '../components/Edit.vue'
import Alter from '../components/Alter.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter);

const routes=[
	{path:'/login',component:Login},
	{path:'/register',component:Register},
	{
		path:'/edit',
		component:Edit,
		children:[
			{path:'/edit/alter/#:userId',name:'alter',component:Alter}
		]
	},
	{path:'/',redirect:'/login'}
];

const router=new VueRouter({
	mode:'history',
	routes:routes,
	linkActiveClass:'my',
	linkExactActiveClass:''
});


export default router;