<template>
	<div>
		<badge variant="danger" lable="Nguy hiem" />
		<list-table :fields="fields" :items="items"> </list-table>
	</div>
</template>
<script>
	import { useThemeStore } from '@/app/store/theme';
	import { ref } from 'vue';
	import Badge from '@/components/Badge.vue';
	import ListTable from '@/components/ListTable.vue';

	export default {
		components: { Badge, ListTable },
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
				{ key: 'status', lable: 'Trạng thái' },
				{
					key: 'action',
					lable: 'Tùy chỉnh',
				},
			]);
			const items = [
				{
					status: 155615,
					id: 1,
					fullname: 'Đinh Văn Mạnh',
				},
				{
					status: 155615,
					id: 5,
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
