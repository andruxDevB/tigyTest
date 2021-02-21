<template>
  <tg-messenger-chat v-if="!$fetchState.pending"></tg-messenger-chat>
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
