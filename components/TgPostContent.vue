<template>
  <div>
    <p class="p-4">{{ event.description }}</p>
    <tg-post-content-virtues
      v-if="event.virtudes_info.length > 0"
      :virtues="_.head(event.virtudes_info).virtud_detail"
    ></tg-post-content-virtues>
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
