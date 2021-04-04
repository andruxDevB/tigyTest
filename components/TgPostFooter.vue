<template>
  <div class="divide-y divide-gray-200">
    <tg-post-footer-resume
      :likes="event.likes_info"
      :comments="event.comments_info"
    ></tg-post-footer-resume>
    <tg-post-footer-actions
      :likes="event.likes_info.likes"
    ></tg-post-footer-actions>
    <tg-post-footer-comments
      :comments="event.comments_info.comments"
    ></tg-post-footer-comments>
    <tg-post-footer-send-comment
      :user="event.user"
    ></tg-post-footer-send-comment>
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
