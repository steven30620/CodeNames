import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';

const socketIO = new VueSocketIO({
	debug: true,
	connection: SocketIO('http://localhost:3000'), //options object is Optional
	vuex: {
		store,
		actionPrefix: 'SOCKET_',
		mutationPrefix: 'SOCKET_',
	},
});

createApp(App).use(socketIO).use(store).use(router).mount('#app');
