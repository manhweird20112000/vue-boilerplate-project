import { createRouter, createWebHistory } from 'vue-router';
import LayoutDashboard from '@/app/layout/admin/LayoutDashboard.vue';
import HomePage from '@/app/modules/cms/home/HomePage.vue';

const routes = [
	{
		path: '/',
		name: 'LayoutDashboard',
		component: LayoutDashboard,
		children: [
			{
				path: '/',
				name: 'Dashborad',
				component: HomePage,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
