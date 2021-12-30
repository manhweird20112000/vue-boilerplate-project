<template>
	<breadcrumb title="Dashboard" v-if="hustlang"> xdb </breadcrumb>
	<button @click="increment">jhbf</button>
	{{ hustlang }}
</template>
<script>
	import { useThemeStore } from '@/app/store/theme';
	import Breadcrumb from '@/components/Breadcrumb.vue';
	import { ref } from 'vue';
	export default {
		components: { Breadcrumb },
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
