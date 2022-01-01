<template>
	<div class="app flex justify-end">
		<sidebar @sidebar="changeSidebar" />
		<div class="container-view w-full lg:w-5/6 xl:w-5/6">
			<div class="navbar sticky top-0">
				<navbar />
			</div>
			<div class="container p-5 min-w-full">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar.vue';
	import Navbar from '@/components/Navbar.vue';
	import { LAYOUT } from '@/app/constants';

	export default {
		components: { Sidebar, Navbar },
		setup() {
			function changeSidebar(data) {
				let containerView = document.querySelector('.container-view');
				if (data) {
					containerView.style.width = `calc(100% - ${LAYOUT.widthSidebar})`;
				} else {
					containerView.style.width = `calc(100% - ${LAYOUT.widthSidebarOptional})`;
				}
			}

			return { changeSidebar };
		},
	};
</script>

<style lang="scss">
	@import '../../../assets/scss/variables';
	.container-view {
		transition: all 0.3s ease-in;
		width: calc(100% - $width-sidebar);
		background: $background-color;
	}
	@media only screen and (min-width: 150px) and (max-width: 767px) {
		.container-view {
			width: 100%;
		}
	}
	@media only screen and (min-width: 768px) and (max-width: 1024px) {
		.container-view {
			width: calc(100% - $width-sidebar-optional);
		}
	}
</style>
