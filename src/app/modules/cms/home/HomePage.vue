<template>
	<div>
		<file-properties filename="my-file.png" type="mp" size="718.kb" />
		<list-table :fields="fields" :items="items">
			<template v-slot:head-hi>
				<div>zd</div>
			</template>
		</list-table>
	</div>
</template>
<script>
	import { useThemeStore } from '@/app/store/theme';
	import { ref } from 'vue';
	import FileProperties from '@/components/FileProperties.vue';
	import ListTable from '@/components/ListTable.vue';

	export default {
		components: { FileProperties, ListTable },
		setup() {
			const theme = useThemeStore();
			let hustlang = ref(true);
			const fields = ref([
				{
					lable: 'hí',
					key: 'hi',
				},
			]);
			const items = ref([
				{
					hi: 'ạhv',
				},
			]);

			function increment() {
				hustlang.value = !hustlang.value;
			}

			return { increment, theme, hustlang, items, fields };
		},
	};
</script>
