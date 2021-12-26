<template>
	<div
		style="background: #0061f7"
		id="sidebar"
		class="fixed top-0 left-0 min-h-screen hidden lg:block xl:block lg:w-1/6 xl:w-1/6"
	>
		<div v-for="(item, index) in sidebar" :key="index">
			<router-link :to="item.path" v-slot="{ isActive }">
				<div
					class="sidebar__item relative flex items-center mx-1 my-1.5 py-2 px-3 rounded-lg"
				>
					<img :src="isActive ? item.icon_active : item.icon_normal" />
					<p class="ml-2 text-lg font-normal text-white" v-if="isActive">
						{{ item.lable }}
					</p>
					<p class="ml-2 text-lg font-normal text-gray-300" v-else>
						{{ item.lable }}
					</p>
					<div
						v-if="isActive"
						style="width: 3px; height: 30px"
						class="bg-white rounded-full absolute right-2"
					></div>
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
					lable: 'Posts',
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
<style lang="scss" scoped>
	.sidebar__item {
		transition: 0.2s all ease-in;
		&:hover {
			background: rgba($color: #ffffff, $alpha: 0.3);
		}
	}
</style>
