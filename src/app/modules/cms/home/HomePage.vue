<template>
	<breadcrumb title="Dashboard"> xdb </breadcrumb>
</template>
<script>
	import { useThemeStore } from '@/app/store/theme';
	import Breadcrumb from '@/components/Breadcrumb.vue';
	export default {
		components: { Breadcrumb },
		setup() {
			const theme = useThemeStore();

			function increment() {
				theme.increment();
			}

			return { increment, theme };
		},
	};
</script>
