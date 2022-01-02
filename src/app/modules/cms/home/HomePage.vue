<template>
	<div>
		<file-properties filename="my-file.png" type="mp" size="718.kb" />
	</div>
</template>
<script>
	import { useThemeStore } from '@/app/store/theme';
	import { ref } from 'vue';
	import FileProperties from '@/components/FileProperties.vue';

	export default {
		components: { FileProperties },
		setup() {
			const theme = useThemeStore();
			let hustlang = ref(true);

			function increment() {
				hustlang.value = !hustlang.value;
			}

			return { increment, theme, hustlang };
		},
	};
</script>
