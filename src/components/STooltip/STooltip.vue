<template>
    <div class="d-tooltip" :style="{ 'width': containerWidth }">
		<slot></slot>
      	<span class="d-tooltip--text"
		  	:class="{
				'd-left': left,
				'd-right': right,
				'd-top--center': top,
				'd-bottom--center': bottom,
				'd-top--left': topLeft,
				'd-top--right': topRight,
				'd-bottom--left': bottomLeft,
				'd-bottom--right': bottomRight,
				'fixed-arrow': fixedArrow,
			}"
			:style="{
				'width': size,
				'max-width': maxWidth,
				'min-width': minWidth,
			}"
		>{{ text }}</span>
    </div>
</template>

<script>
export default {
	name: "DTooltip",
	props: {
		text: {
			type: String,
			required: true,
		},
		left: {
			type: Boolean,
			default: false,
		},
		right: {
			type: Boolean,
			default: false,
		},
		top: {
			type: Boolean,
			default: false,
		},
		topRight: {
			type: Boolean,
			default: false,
		},
		topCenter: {
			type: Boolean,
			default: false,
		},
		topLeft: {
			type: Boolean,
			default: false,
		},
		bottom: {
			type: Boolean,
			default: false,
		},
		bottomRight: {
			type: Boolean,
			default: false,
		},
		bottomCenter: {
			type: Boolean,
			default: false,
		},
		bottomLeft: {
			type: Boolean,
			default: false,
		},
		fixedArrow: {
			type: Boolean,
			default: false,
		},
		size: {
			type: String,
			default: null,
		},
		containerWidth: {
			type: String,
			default: null,
		},
		maxWidth: {
			type: String|undefined|null,
			default: '100%',
		},
		minWidth: {
			type: String,
			default: '0',
		}
	}
}
</script>

<style scoped lang="scss">
$color: #555;
.d-tooltip {
	position: relative;
	display: inline-block;
	opacity: 1;

	&:hover {
		.d-tooltip--text {
			visibility: visible;
		}
	}

	.d-tooltip--text {
		visibility: hidden;
		background-color: #555;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 10px;
		word-wrap: break-word;
 		transition: opacity 0.3s;

		/* Position the d-tooltip */
		position: absolute;
		z-index: 1;

		&.fixed-arrow {
			&.d-top {
				&--left {
					bottom: 100%;
					left: 0;
					margin-left: 0;

					&::after {
						top: 100%;
						left: 7px;
					}
				}
				&--right {
					bottom: 100%;
					right: 0;
					margin-right: 0;

					&::after {
						top: 100%;
						right: 7px;
					}
				}
			}
			&.d-bottom {
				&--left {
					top: 100%;
					left: 0;
					margin-left: 0;

					&::after {
						bottom: 100%;
						left: 7px;
					}
				}
				&--right {
					top: 100%;
					right: 0;
					margin-right: 0;

					&::after {
						bottom: 100%;
						right: 7px;
					}
				}
			}
		}

		&.d-right {
			top: -5px;
			left: 105%;
			&::after {
				content: "";
				position: absolute;
				top: 50%;
    			right: 100%;
				margin-left: 0;
				border-width: 5px;
				border-style: solid;
				border-color: transparent $color transparent transparent;
			}
		}
		&.d-left {
			top: -5px;
			right: 105%;
			&::after {
				content: "";
				position: absolute;
				top: 50%;
    			left: 100%;
				margin-left: 0;
				border-width: 5px;
				border-style: solid;
				border-color: transparent transparent transparent $color;
			}
		}
		&.d-top {
			&--left {
				bottom: 100%;
				left: 0;
				margin-left: -60px;
				&::after {
					content: "";
					position: absolute;
					top: 100%;
					left: 50%;
					margin-left: 0;
					border-width: 5px;
					border-style: solid;
					border-color: $color transparent transparent transparent;
				}
			}
			&--right {
				bottom: 100%;
				right: 0;
				margin-right: -60px;
				&::after {
					content: "";
					position: absolute;
					top: 100%;
					right: 50%;
					margin-left: 0;
					border-width: 5px;
					border-style: solid;
					border-color: $color transparent transparent transparent;
				}
			}
			&--center {
				bottom: 100%;
				left: 50%;
				margin-left: -60px;
				&::after {
					content: "";
					top: 100%;
					left: 50%;
					position: absolute;
					margin-left: 0;
					border-width: 5px;
					border-style: solid;
					border-color: $color transparent transparent transparent;
				}
			}
		}
		&.d-bottom {
			&--left {
				top: 100%;
				left: 0;
				margin-left: -60px;
				&::after {
					content: "";
					bottom: 100%;
					left: 50%;
					position: absolute;
					margin-left: 0;
					border-width: 5px;
					border-style: solid;
					border-color: transparent transparent $color transparent;
				}
			}
			&--right {
				top: 100%;
				right: 0;
				margin-right: -60px;
				&::after {
					content: "";
					bottom: 100%;
					right: 50%;
					position: absolute;
					margin-left: 0;
					border-width: 5px;
					border-style: solid;
					border-color: transparent transparent $color transparent;
				}
			}
			&--center {
				top: 100%;
				left: 50%;
				margin-left: -60px;
				&::after {
					content: "";
					bottom: 100%;
					left: 50%;
					position: absolute;
					margin-left: 0;
					border-width: 5px;
					border-style: solid;
					border-color: transparent transparent $color transparent;
				}
			}
		}
	}
}
</style>