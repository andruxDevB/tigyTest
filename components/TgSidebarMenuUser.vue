<template>
  <div>
    <div class="p-12 pb-6 flex content-center">
      <common-tg-avatar
        size="6xl"
        :image="user.foto"
        :alt="user.username"
        custom-class="border-3 border-white shadow-lg"
      ></common-tg-avatar>
    </div>
    <div v-if="user.username" class="text-center">
      <common-tg-badge
        :color="balance.ranking.color"
        :bg="balance.ranking.fondo"
      >
        {{ user.username }}
      </common-tg-badge>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TgSidebarMenuUser',
  computed: {
    user() {
      return this.$auth.user
    },
    ...mapGetters({
      balance: 'profile/balance',
    }),
  },
}
</script>
