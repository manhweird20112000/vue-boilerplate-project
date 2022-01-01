<template>
	<list-table :fields="fields" :items="items" />
</template>
<script>
	import { useThemeStore } from '@/app/store/theme';
	import { ref } from 'vue';
	import ListTable from '@/components/ListTable.vue';

	export default {
		components: { ListTable },
		setup() {
			const fields = ref([
				{
					key: 'id',
					lable: 'STT',
				},
				{
					key: 'fullname',
					lable: 'Họ và tên',
				},
				{
					key: 'action',
					lable: 'Tùy chỉnh',
				},
			]);
			const items = [
				{
					id: 1,
					fullname: 'Đinh Văn Mạnh',
				},
			];
			const theme = useThemeStore();
			let hustlang = ref(true);

			function increment() {
				hustlang.value = !hustlang.value;
			}

			return { increment, theme, hustlang, items, fields };
		},
	};
</script>
