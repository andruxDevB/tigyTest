<template>
  <div class="min-h-0 flex-1 overflow-y-auto">
    <!-- Thread section-->
    <ul class="p-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
      <tg-messenger-chat-thread-message
        v-for="item in thread.info"
        :key="`thread-message-${item.vevento_id}`"
        :message="item"
      ></tg-messenger-chat-thread-message>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TgMessengerChatThread',
  computed: {
    ...mapGetters({
      thread: 'messenger/thread',
    }),
  },
}
</script>
