<template>
  <div class="bg-white px-4 sm:px-6 lg:px-8 py-4 flex border-t border-gray-200">
    <div class="relative rounded-md shadow-sm flex-auto">
      <input
        v-model="message"
        type="text"
        name="message"
        class="focus:ring-indigo-500 border focus:border-purple-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
        placeholder="Enviar mensaje"
        @keyup.enter="sendMessage()"
      />
      <div class="absolute inset-y-0 right-0 pr-0 flex items-center">
        <button
          class="group flex justify-center p-2 border border-transparent rounded-md text-sm font-medium focus:outline-none"
          @click="sendMessage()"
        >
          <solid-paper-airplane-icon
            class="w-6 h-6 text-gray-400 group-hover:text-purple-500"
          ></solid-paper-airplane-icon>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgMessengerChatFooter',
  data() {
    return {
      message: null,
    }
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('messenger/sendMessage', {
        chatId: this.$route.params.id,
        message: this.message,
      })
      this.message = null
    },
  },
}
</script>
