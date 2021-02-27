<template>
  <div ref="ThreadContainer" class="min-h-0 flex-1 overflow-y-auto">
    <!-- Thread section-->
    <transition-group
      name="list"
      tag="ul"
      class="p-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8"
    >
      <tg-messenger-chat-thread-message
        v-for="item in thread.info"
        :key="`thread-message-${item.vevento_id}`"
        :message="item"
      ></tg-messenger-chat-thread-message>
    </transition-group>
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
  watch: {
    'thread.info'(value) {
      setTimeout(
        function () {
          this.scrollToElement()
        }.bind(this),
        200
      )
    },
  },
  mounted() {
    this.scrollToElement()
  },
  methods: {
    scrollToElement() {
      const el = this.$refs.ThreadContainer
      if (el) {
        el.scrollTop = el.scrollHeight
      }
    },
  },
}
</script>
<style lang="css">
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
