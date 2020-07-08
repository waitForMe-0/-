import Vue from 'vue'
import App from './App'
import {myRequist } from "./util/api.js"
Vue.config.productionTip = false
Vue.prototype.$myRequist = myRequist
Vue.filter("tiemFilter", function(val){
		if(!val) return "";
		const nDate = new Date(val)
		const year = nDate.getFullYear();
		const month = nDate.getMonth();
		const day = nDate.getDay()
		return `${year}-${month}-${day}`
})
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
