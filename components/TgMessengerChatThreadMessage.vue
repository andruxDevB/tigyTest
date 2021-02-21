<template>
  <li :class="[messageAlignClass]">
    <div>
      <p :class="[baseClass, messageClass]">
        <template v-if="message.link1">
          <div class="flex items-center">
            <outline-link-icon class="w-4 h-4 mr-1" /><a
              :href="message.link1"
              target="_blank"
            >
              {{ message.link1 }}</a
            >
          </div>
        </template>
        <template v-else>
          {{ message.mensaje }}
        </template>
      </p>
    </div>
    <p class="mt-1 text-xs text-gray-400 whitespace-nowrap">
      <time :datetime="message.fecha"
        >hace {{ $moment(message.fecha).toNow(true) }}</time
      >
    </p>
  </li>
</template>
<script>
export default {
  name: 'TgMessengerChatThreadMessage',
  props: {
    message: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      baseClass: 'p-2 shadow rounded sm:rounded-lg text-sm inline-block',
      ownerClass: {
        sender: 'bg-white text-gray-800',
        me: 'bg-purple-500 text-white',
      },
      alignClass: {
        sender: 'text-left pr-8',
        me: 'text-right pl-8',
      },
    }
  },
  computed: {
    messageClass() {
      return this.ownerClass[this.owner]
    },
    messageAlignClass() {
      return this.alignClass[this.owner]
    },
    owner() {
      return this.message.vuser2_id !== this.$auth.user.user_id
        ? 'me'
        : 'sender'
    },
  },
}
</script>
