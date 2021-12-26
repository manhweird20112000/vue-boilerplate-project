<template>
	<characters />
</template>
<script>
	import { useThemeStore } from '@/app/store/theme';
	import Characters from '@/components/Characters.vue';
	export default {
		components: { Characters },
		setup() {
			const theme = useThemeStore();

			function increment() {
				theme.increment();
			}

			return { increment, theme };
		},
	};
</script>
