<template>
  <div class="space-y-4 divide-y divide-gray-200">
    <tg-post-footer-resume
      :likes="event.likes_info"
      :comments="event.comments_info"
    ></tg-post-footer-resume>
    <tg-post-footer-actions></tg-post-footer-actions>
  </div>
</template>
<script>
export default {
  name: 'TgPostFooter',
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
