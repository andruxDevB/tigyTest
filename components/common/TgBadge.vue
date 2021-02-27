<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium"
    :style="`background-color: ${bg}; color: ${color};`"
  >
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'TgBadge',
  props: {
    bg: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>
