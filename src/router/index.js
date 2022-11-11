import { createRouter, createWebHashHistory } from 'vue-router';
import SignInView from '../views/SignInView.vue';
import HomeView from '../views/HomeView.vue';
import GameConfigView from '../views/GameConfigView';
import GameView from '../views/GameView';
import SalonView from '../views/SalonView';

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
	{
		path: '/Salon',
		name: 'SalonView',
		component: SalonView,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
