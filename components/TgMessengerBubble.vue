<template>
  <div class="absolute bottom-6 right-6 z-40">
    <nuxt-link
      v-for="contact in contacts"
      :key="`messenger-bubble-${contact.id}`"
      :to="`/messenger/${contact.gchat_id}`"
    >
      <common-tg-avatar
        v-tooltip.left="contact.full_name"
        :image="contact.image"
        :alt="contact.full_name"
        size="xl"
        custom-class="shadow-lg mt-4 hover:shadow-2xl"
      ></common-tg-avatar>
    </nuxt-link>
    <nuxt-link
      v-tooltip.left="'Todas las convesasiones '"
      :to="`/messenger`"
      class="h-12 w-12 rounded-full shadow-lg bg-purple-500 mt-4 hover:bg-purple-700 flex content-center justify-center"
    >
      <div class="self-center justify-self-center">
        <outline-chat-icon class="text-white w-8 h-8"></outline-chat-icon>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TgMessengerBubble',
  computed: {
    ...mapGetters({
      contacts: 'messenger/contacts',
    }),
  },
  async mounted() {
    await this.$store.dispatch('messenger/getContacts')
  },
}
</script>
