<template>
  <div class="h-full flex overflow-hidden">
    <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
      <div class="flex-1 relative z-0 flex overflow-hidden">
        <nuxt-child />
        <tg-messenger-contacts></tg-messenger-contacts>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout: 'messenger',
  async fetch() {
    await this.$store.dispatch('messenger/getContacts')
  },
  head() {
    return {
      title: 'Conversaciones',
    }
  },
  mounted() {
    this.$store.commit('messenger/SET_VISIBILITY', false)
  },
  destroyed() {
    this.$store.commit('messenger/SET_VISIBILITY', true)
  },
}
</script>
