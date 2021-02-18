<template>
  <div class="bg-white shadow mb-5 rounded-md">
    <tg-post-header
      :date="event.created_at"
      :reward="event.cantidad_info"
      :type="event.post_type"
      :user="event.user"
    ></tg-post-header>
  </div>
</template>
<script>
export default {
  name: 'TgPost',
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
