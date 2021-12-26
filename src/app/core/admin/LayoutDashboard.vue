<template>
	<div class="app">
		<sidebar />
		<div class="container-view">
			<router-view />
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar.vue';

	export default {
		components: { Sidebar },
		setup() {},
	};
</script>
