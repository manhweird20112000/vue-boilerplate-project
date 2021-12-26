<template>
	<div
		style="background: #0061f7"
		id="sidebar"
		class="fixed top-0 left-0 min-h-screen xl:w-1/6"
	>
		<div v-for="(item, index) in sidebar" :key="index">
			<router-link :to="item.path" v-slot="{ isActive }">
				<div>
					<img :src="isActive ? item.icon_active : item.icon_normal" />
					<p>{{ item.lable }}</p>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	import { ref } from 'vue';
	export default {
		setup() {
			const sidebar = ref([
				{
					path: '/',
					lable: 'Dashborad',
					icon_normal: '../assets/icons/icon_dashboard_normal.svg',
					icon_active: '../assets/icons/icon_dashboard_active.svg',
				},
				{
					path: '/posts',
					lable: 'Pots',
					icon_normal: '../assets/icons/icon_posts_normal.svg',
					icon_active: '../assets/icons/icon_posts_active.svg',
				},
				{
					path: '/categories',
					lable: 'Categories',
					icon_normal: '../assets/icons/icon_categories_normal.svg',
					icon_active: '../assets/icons/icon_categories_active.svg',
				},
				{
					path: '/media',
					lable: 'Media',
					icon_normal: '../assets/icons/icon_media_normal.svg',
					icon_active: '../assets/icons/icon_media_active.svg',
				},
			]);
			return { sidebar };
		},
	};
</script>
