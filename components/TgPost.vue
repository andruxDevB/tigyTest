<template>
  <div class="bg-white shadow mb-5 rounded-md">
    <tg-post-header
      :date="event.created_at"
      :reward="event.cantidad_info"
      :type="event.post_type"
      :user="event.user"
    ></tg-post-header>
    <tg-post-content :event="event" />
  </div>
</template>
<script>
import TgPostContent from './TgPostContent.vue'
export default {
  name: 'TgPost',
  components: { TgPostContent },
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
