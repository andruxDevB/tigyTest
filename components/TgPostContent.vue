<template>
  <div class="p-4">
    {{ event.description }}
  </div>
</template>
<script>
export default {
  name: 'TgPostContent',
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
