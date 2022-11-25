import { createRouter, createWebHashHistory } from 'vue-router';
import SignInView from '../views/SignInView.vue';
import HomeView from '../views/HomeView.vue';
import GameConfigView from '../views/GameConfigView';
import GameView from '../views/GameView';

const routes = [
	{
		path: '/',
		name: 'SignInView',
		component: SignInView,
	},
	{
		path: '/Home',
		name: 'HomeView',
		component: HomeView,
	},
	{
		path: '/GameConfig',
		name: 'GameConfigView',
		component: GameConfigView,
	},
	{
		path: '/Game',
		name: 'GameView',
		component: GameView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
