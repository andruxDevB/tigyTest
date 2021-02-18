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
  data() {
    return {
      isLoading: true,
      events: [],
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    async getEvents() {
      this.events = await this.$store.dispatch('timeline/get')
    },
  },
}
</script>
