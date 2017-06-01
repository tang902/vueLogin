import Vue from 'vue'
import router from './routers/router.config.js'
import store from './stores.js'
import App from './App.vue'

require('!style-loader!css-loader!less-loader!./styleless/style.less');


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
