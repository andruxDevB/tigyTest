<template>
  <div class="relative">
    <img
      :class="[baseClass, customClass, sizeClass[size]]"
      :src="image"
      :alt="alt"
    />
    <span
      class="absolute inset-0 shadow-inner rounded-full"
      aria-hidden="true"
    ></span>
  </div>
</template>
<script>
export default {
  name: 'TgAvatar',
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'lg',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      baseClass: 'rounded-full',
      sizeClass: {
        md: 'h-8 w-8',
        lg: 'h-10 w-10',
        xl: 'h-12 w-12',
        '6xl': 'h-36 w-36',
      },
    }
  },
}
</script>
