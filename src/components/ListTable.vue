<template>
	<div id="table" class="overflow-x-auto">
		<table border="1" class="w-full">
			<tr class="bg-gray-300">
				<td
					class="text-center font-medium text-xl py-3 text-gray-600"
					v-for="field in fields"
					:key="field.lable"
					:style="`min-width: ${100 / fields.length}%`"
				>
					<slot
						:name="`head-${field.key}`"
						:data="field"
						v-if="hasSlotCell(`head-${field.key}`)"
					></slot>
					<template v-else>
						{{ field.lable }}
					</template>
				</td>
			</tr>
			<tr
				class="border-b-2 cursor-pointer hover:bg-gray-200"
				v-for="(item, index) in items"
				:key="index"
			>
				<td
					v-for="field in fields"
					:key="field.key"
					class="text-center font-medium text-lg py-3"
				>
					<slot
						:name="field.key"
						:data="item"
						v-if="hasSlotCell(field.key)"
					></slot>
					<template v-else>
						{{ items[index][`${field.key}`] }}
					</template>
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		props: ['fields', 'items', 'isLoading'],
		setup(props, context) {
			function hasSlotCell(slot) {
				return !!context.slots[`${slot}`];
			}
			return { hasSlotCell };
		},
	};
</script>

<style lang="scss" scoped></style>
