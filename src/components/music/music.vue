<template>
	<div :class="wrapperClasses" v-show="show" @click="handleClick"></div>
</template>

<script>
	import name from '../../common/js/name'

	const PREFIX_CLS =
		name.libShortName.toLowerCase() +
		'-' +
		name.componentsName.music.toLowerCase()

	const ANIMATION_ARR = ['rotate', 'scale']
	const SIZE_ARR = ['small', 'medium', 'large']

	export default {
		name: name.componentsName.music,
		props: {
			src: {
				type: String,
				default: '',
				required: true
			},
			playClass: {
				type: String,
				default: `${PREFIX_CLS}` + '-play'
			},
			pauseClass: {
				type: String,
				default: `${PREFIX_CLS}` + '-pause'
			},
			maxVolume: {
				type: Number,
				default: 1
			},
			volStepSize: {
				type: Number,
				default: 0.05
			},
			animated: {
				type: Boolean,
				default: true
			},
			animation: {
				type: String,
				default: 'rotate'
			},
			size: {
				type: String,
				default: 'medium'
			},
			show: {
				type: Boolean,
				default: true
			}
		},
		data () {
			return {
				audio: {},
				clickState: true,
				paused: true,
				volume: 0,
				pausedClass: `${PREFIX_CLS}` + '-animation-paused',
				wrapperClasses: []
			}
		},
		watch: {
			volume (val, oldVal) {
				if (val < 0) {
					val = 0
				} else if (val > this.maxVolume) {
					val = this.maxVolume
				}
				this.audio.volume = val
				// 音量小于等于0，则播放状态改成暂停，允许点击播放器
				if (val <= 0) {
					this.paused = true
					this.clickState = true

					// 音量刚从0变大，则播放状态改成播放
				} else if (val > 0 && oldVal <= 0) {
					this.paused = false
				}

				// 音量达到最大，则允许点击播放器
				if (val >= this.maxVolume) {
					this.clickState = true
				}
			},
			paused (val) {
				// 监听播放状态变量，调整播放状态与样式
				if (val === true) {
					this.updateWrapperClasses([this.pauseClass, this.pausedClass])
					this.audio.pause()
				} else {
					this.updateWrapperClasses([this.playClass])
					this.audio.play()
				}
			}
		},
		created () {
			// 校验并修正最大音量
			if (this.maxVolume > 1 || this.maxVolume <= 0) {
				this.maxVolume = 1
			}

			// 更新样式
			this.updateWrapperClasses([this.pauseClass, this.pausedClass])

			// 创建audio对象
			this.audio = new Audio()
			this.audio.src = this.src
			this.audio.preload = true
			this.audio.loop = true
		},
		methods: {
			handleClick (e) {
				if (!this.clickState) {
					return
				}
				this.clickState = false
				if (this.audio.paused === true) {
					this.play()
				} else {
					this.pause()
				}
				this.$emit('musicClick', e)
			},
			// 播放
			play () {
				this.increaseVolume()
			},
			// 暂停
			pause () {
				this.decreaseVolume()
			},
			// 增大音量
			increaseVolume () {
				if (this.volume < this.maxVolume) {
					let index = setInterval(() => {
						if (this.volume >= this.maxVolume) {
							clearInterval(index)
						}
						this.volume +=
							this.volStepSize < this.maxVolume && this.volStepSize > 0
								? this.volStepSize
								: this.maxVolume
						if (this.volume >= this.maxVolume) {
							this.volume = this.maxVolume
						}
					}, 50)
				}
			},
			// 减小音量
			decreaseVolume () {
				if (this.volume > 0) {
					let index = setInterval(() => {
						if (this.volume <= 0) {
							clearInterval(index)
						}
						this.volume -=
							this.volStepSize < this.maxVolume && this.volStepSize > 0
								? this.volStepSize
								: this.maxVolume
						if (this.volume <= 0) {
							this.volume = 0
						}
					}, 50)
				}
			},
			// 更新容器样式
			updateWrapperClasses (arr) {
				let classes = [`${PREFIX_CLS}`]
				if (SIZE_ARR.indexOf(this.size) !== -1) {
					classes.push(`${PREFIX_CLS}` + '-size-' + this.size)
				}
				if (this.animated === true) {
					if (ANIMATION_ARR.indexOf(this.animation) !== -1) {
						classes.push(`${PREFIX_CLS}` + '-animation-' + this.animation)
					}
				}
				classes = classes.concat(arr)
				this.wrapperClasses = classes
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/style/music';
</style>