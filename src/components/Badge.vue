<template>
	<div id="badge" :class="`${setVariant()} rounded-full`">
		<p>{{ lable }}</p>
	</div>
</template>
<script>
	import { BADGE_STATUS } from './constants';
	export default {
		props: ['variant', 'lable', 'radius'],
		setup(props) {
			const BADGE_BORDER_RADIUS = {
				lg: 'lg',
				sm: 'sm',
				xl: 'xl',
				full: 'full',
			};
			function setVariant() {
				switch (props.variant) {
					case BADGE_STATUS.success:
						return BADGE_STATUS.success;
					case BADGE_STATUS.warning:
						return BADGE_STATUS.warning;
					case BADGE_STATUS.danger:
						return BADGE_STATUS.danger;
					default:
						return BADGE_STATUS.info;
				}
			}
			function setRadius() {
				switch (props.radius) {
					case BADGE_BORDER_RADIUS.lg:
						return 'rounded-' + BADGE_BORDER_RADIUS.lg;
					case BADGE_BORDER_RADIUS.sm:
						return 'rounded-' + BADGE_BORDER_RADIUS.sm;
					case BADGE_BORDER_RADIUS.xl:
						return 'rounded-' + BADGE_BORDER_RADIUS.xl;
					default:
						'rounded-' + BADGE_BORDER_RADIUS.full;
				}
			}
			return { setVariant, setRadius };
		},
	};
</script>
<style scoped lang="scss">
	@import '../assets/scss/variables';
	#badge {
		min-width: 100px;
		max-width: 120px;
		@apply flex items-center justify-center rounded-full;
		p {
			padding: 3px 5px;
			@apply text-lg;
		}
	}
	.success {
		background: rgba($color: $success-color, $alpha: 0.2);
		p {
			color: $success-color;
		}
	}
	.danger {
		background: rgba($color: $danger-color, $alpha: 0.2);
		p {
			color: $danger-color;
		}
	}
	.warning {
		background: rgba($color: $warning-color, $alpha: 0.2);
		p {
			color: $warning-color;
		}
	}
	.info {
		background: rgba($color: $info-color, $alpha: 0.2);
		p {
			color: $info-color;
		}
	}
</style>
