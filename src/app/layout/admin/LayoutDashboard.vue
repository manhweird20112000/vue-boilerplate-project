<template>
	<div class="app flex justify-end">
		<sidebar />
		<div class="container-view w-5/6" style="background: #d9dbe9">
			<div class="navbar sticky top-0">
				<navbar />
			</div>
			<div class="container p-5">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar.vue';
	import Navbar from '@/components/Navbar.vue';

	export default {
		components: { Sidebar, Navbar },
		setup() {},
	};
</script>

