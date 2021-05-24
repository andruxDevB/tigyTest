<template>
  <ul class="flex-1 divide-y divide-gray-200 overflow-y-auto">
    <sidebar-tg-notification-item
      v-for="(alert, index) in events"
      :key="`alert-item-${index}`"
      :date="$moment(alert.created_at.date).toNow(true)"
      :image="alert.user.image"
      :link="`/post/${alert.event_id}`"
    >
      <template #title>
        <span class="font-bold">{{ alert.user.full_name }}</span>
        <span class="text-gray-500">{{ alert.description }}</span>
      </template>
    </sidebar-tg-notification-item>
  </ul>
</template>
<script>
export default {
  name: 'TgNotificationsNetwork',
  computed: {
    events() {
      return this.$store.state.notifications.events
    },
  },
}
</script>
