<template>
	<div id="table" class="w-full">
		<table border="1" class="w-full">
			<tr class="bg-gray-300">
				<td
					class="text-center font-medium text-xl py-3 text-gray-600"
					v-for="field in fields"
					:key="field.lable"
					:style="`width: ${100 / fields.length}%`"
				>
					{{ field.lable }}
				</td>
			</tr>
			<tr
				class="border-b-2 hover:bg-gray-200"
				v-for="(item, index) in items"
				:key="index"
			>
				<td
					v-for="(value, indexValue) in item"
					:key="indexValue"
					class="text-center font-medium text-lg py-3"
				>
					{{ value }}
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		props: ['fields', 'items', 'isLoading'],
		setup() {
			showDataTable();
			function showDataTable(item) {
				let html = '';
				for (const key in item) {
					html += `<td>${item[`${key}`]}</td>`;
				}
				return html;
			}
			return { showDataTable };
		},
	};
</script>

<style lang="scss" scoped></style>
