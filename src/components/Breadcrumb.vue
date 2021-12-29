<template>
	<div
		id="breadcrumb"
		class="my-0.5 flex items-center justify-center flex-wrap md:justify-center lg:justify-between xl:justify-between"
	>
		<div class="xl:w-auto w-full">
			<p class="text-4xl font-semibold text-black">{{ title }}</p>
		</div>
		<div class="xl:w-auto w-full">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Breadcrumb',
		props: ['title'],
		setup() {},
	};
</script>
