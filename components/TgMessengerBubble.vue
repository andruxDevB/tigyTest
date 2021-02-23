<template>
  <div class="absolute bottom-6 right-6 z-10">
    <div v-for="contact in contacts" :key="`messenger-bubble-${contact.id}`">
      <nuxt-link :to="`/messenger/${contact.gchat_id}`">
        <tg-avatar
          v-tooltip.left="contact.full_name"
          :image="contact.image"
          :alt="contact.full_name"
          custom-class="shadow-lg mt-4 hover:shadow-2xl"
        ></tg-avatar>
      </nuxt-link>
    </div>
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
}
</script>
