<template>
  <ul class="flex-1 divide-y divide-gray-200 overflow-y-auto">
    <sidebar-tg-notification-item
      v-for="(alert, index) in alerts"
      :key="`alert-item-${index}`"
      :date="$moment(alert.created_at).toNow(true)"
      :image="alert.user.image"
      :link="`/post/${alert.event_id}`"
    >
      <template #title>
        <span class="font-bold">{{ alert.user.full_name }}</span>
        <span class="text-gray-500">{{ alert.description }}</span>
      </template>
      <template #action>
        <span
          v-if="!alert.viewed"
          class="bg-purple-500 absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"
          aria-hidden="true"
        ></span>
      </template>
    </sidebar-tg-notification-item>
  </ul>
</template>
<script>
export default {
  name: 'TgNotificationsUser',
  computed: {
    alerts() {
      return this.$store.state.notifications.alerts
    },
  },
}
</script>
