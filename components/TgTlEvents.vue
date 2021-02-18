<template>
  <div class="mt-5 mb-5">
    <tg-post
      v-for="(event, index) in events"
      :key="`event-${event.evento_id}-${index}`"
      :event="event.evento"
    ></tg-post>
  </div>
</template>
<script>
export default {
  name: 'TgTlEvents',
  props: {
    events: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
}
</script>
