<template>
	<div
		style="min-width: 145px; max-width: 145px"
		class="bg-white p-5 rounded-xl relative flex items-center justify-center flex-col cursor-pointer border-2"
	>
		<div
			class="absolute top-2 right-2 cursor-pointer py-1 rounded-lg hover:bg-gray-100"
		>
			<img
				style="transform: rotate(90deg)"
				src="../assets/icons/icon_three_dot.svg"
				alt=""
			/>
		</div>
		<div :class="`p-1 mt-2 rounded-xl ${setType()}`">
			<img
				src="../assets/icons/icons_image_type.svg"
				alt="image_type"
				srcset=""
				v-if="setType() === 'image'"
			/><img
				src="../assets/icons/icon_video_type.svg"
				alt="image_type"
				srcset=""
				v-else-if="setType() === 'video'"
			/>
			<img
				src="../assets/icons/icon_mp3_type.svg"
				alt="image_type"
				srcset=""
				v-else-if="setType() === 'mp3'"
			/>
			<p v-else class="text-white mx-5 my-2 text-3xl">?</p>
		</div>
		<p class="my-2 text-lg">{{ filename }}</p>
		<p class="text-gray-400">{{ size }}</p>
	</div>
</template>
<script>
	import { IMAGE_TYPE, MP3_TYPE, VIDEO_TYPE } from './constants';
	export default {
		props: ['type', 'filename', 'size'],
		setup(props) {
			function setType() {
				switch (true) {
					case IMAGE_TYPE.includes(props.type):
						return 'image';
					case VIDEO_TYPE.includes(props.type):
						return 'video';
					case MP3_TYPE.includes(props.type):
						return 'mp3';
					default:
						return 'unknown';
				}
			}
			return { setType };
		},
	};
</script>

<style scoped lang="scss">
	@import '../assets/scss/variables';
	.image {
		background: $primary-color;
	}
	.mp3 {
		background: $warning-color;
	}
	.video {
		background: $danger-color;
	}
	.unknown {
		background: $label-color;
	}
</style>
