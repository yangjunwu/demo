import Vue from "vue";


import VueRouter from "vue-router";

//Vue.config.debug(true);
Vue.use(VueRouter);


import list from "./components/list.vue";
import hello from "./components/hello.vue";
Vue.config.debug = true;

var App = Vue.extend({});

var router = new VueRouter({	
	'/list':{
		name:'list',
		component:list
	},
	'/hello':{
		name:'hello',
		component:hello
	}
});


//router.start(App,"#app");
//new Vue(app);
//new Vue(test);
new Vue({
	router
}).$mount('#app');