<template>
  <tg-messenger-chat></tg-messenger-chat>
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
