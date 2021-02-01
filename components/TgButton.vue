<template>
  <button>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'TgButton',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'purple',
    },
  },
}
</script>
