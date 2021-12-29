<template>
	<div id="sidebar" class="fixed top-0 left-0 min-h-screen">
		<div
			class="flex items-center justify-center xl:justify-between w-10/12 mx-auto py-5"
		>
			<div class="xl:block hidden">
				<p class="text-white text-4xl italic font-bold">LOGO</p>
			</div>
			<img
				class="cursor-pointer"
				src="../assets/icons/icon_sidebar.svg"
				alt=""
			/>
		</div>
		<div
			id="line-sidebar"
			class="flex justify-center mx-auto opacity-25 w-10/12"
		></div>
		<div class="my-2">
			<div v-for="(item, index) in sidebar" :key="index">
				<router-link :to="item.path" v-slot="{ isActive }">
					<div
						class="sidebar__item relative flex items-center mx-1 my-1.5 py-2 px-3 rounded-lg"
					>
						<img :src="isActive ? item.icon_active : item.icon_normal" />
						<p
							class="title-link ml-2 text-lg font-normal text-white"
							v-if="isActive"
						>
							{{ item.lable }}
						</p>
						<p class="title-link ml-2 text-lg font-normal text-gray-300" v-else>
							{{ item.lable }}
						</p>
						<div
							v-if="isActive"
							style="width: 3px; height: 30px"
							class="active-menu bg-white rounded-full absolute right-2"
						></div>
					</div>
				</router-link>
			</div>
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
	@import '../assets/scss/variables';
	#sidebar {
		width: $width-sidebar;
		background: #0061f7;
	}
	#line-sidebar {
		height: 2px;
		background: $border-color;
	}
	.sidebar__item {
		transition: 0.2s all ease-in;
		&:hover {
			background: rgba($color: #ffffff, $alpha: 0.3);
		}
	}

	@media only screen and (min-width: 150px) and (max-width: 767px) {
		#sidebar {
			left: 100%;
		}
	}

	@media only screen and (min-width: 768px) and (max-width: 1024px) {
		#sidebar {
			width: $width-sidebar-optional;
		}
		.title-link {
			display: none;
		}
		.sidebar__item {
			@apply flex items-center justify-center;
		}
		.active-menu {
			right: 0;
		}
	}
</style>
