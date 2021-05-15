<template>
  <div ref="lottieContainer"></div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  name: 'TgAnimation',
  props: {
    path: {
      required: true,
      type: String,
    },
    renderer: {
      required: false,
      type: String,
      default: 'svg',
    },
    autoplay: {
      required: false,
      type: Boolean,
      default: true,
    },
    loop: {
      required: false,
      type: Boolean,
      default: true,
    },
    speed: {
      required: false,
      type: Number,
      default: 1,
    },
    options: {
      required: false,
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      path: this.path,
      renderer: this.renderer,
      autoplay: this.autoplay,
      loop: this.loop,
      ...this.options,
    })
    lottie.setSpeed(this.speed)
  },
}
</script>
