import VueSocketIO from 'vue-socket.io'
import VueResource from 'vue-resource'
import store from './store'
import { url } from './utils/config'
import App from './App.vue'
import router from './router'


Vue.use(new VueSocketIO({
	debug: true,
	connection: '${ url }/video-chat',
	vuex: {
		store,
		actionPrefix: 'SOCKET_',
		mutationPrefix: 'SOCKET_'
	},
}))

Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
