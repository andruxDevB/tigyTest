<template>
  <div class="flex w-full">
    <tg-messenger-chat v-if="!$fetchState.pending"></tg-messenger-chat>
    <tg-messenger-chat-skeleton
      v-if="$fetchState.pending"
    ></tg-messenger-chat-skeleton>
  </div>
</template>
<script>
export default {
  async fetch() {
    await this.$store.dispatch('messenger/getThread', {
      chatId: this.$route.params.id,
    })
  },
  watch: {
    $route() {
      this.$fetch()
    },
  },
}
</script>
