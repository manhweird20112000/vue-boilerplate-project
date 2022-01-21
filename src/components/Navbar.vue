<template>
	<div
		id="navbar"
		style="min-height: 80px"
		class="bg-white flex justify-between items-center px-4"
	>
		<div class="block bg-gray-400 p-1 rounded-lg" @click="showSidebar">
			<img width="30" src="../assets/icons/icon_sidebar.svg" alt="" />
		</div>
		<div class="flex items-center">
			<div id="darkmode">
				<div class="navbar-func">
					<img src="../assets/icon_dark_mode.svg" alt="" />
				</div>
			</div>
			<div id="notification">
				<div class="navbar-func">
					<div class="count-notification"></div>
					<img src="../assets/icon_notification.svg" alt="" />
				</div>
			</div>
			<div id="avatar">
				<div class="navbar-func">
					<img src="../assets/default.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		setup(props, context) {
			function showSidebar() {
				context.emit();
			}
			return { showSidebar };
		},
	};
</script>
<style lang="scss">
	.navbar-func {
		width: 40px;
		height: 40px;
		@apply rounded-full bg-gray-100 flex items-center justify-center overflow-hidden mx-3 cursor-pointer relative;
		img {
			@apply object-cover object-center;
		}
		.count-notification {
			min-width: 12px;
			min-height: 12px;
			top: 5px;
			right: 8px;
			@apply bg-red-600 absolute rounded-full border-2  border-white;
		}
	}
</style>
