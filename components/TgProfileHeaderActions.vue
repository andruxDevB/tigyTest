<template>
  <div
    class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
  >
    <form-tg-button v-if="canSendFriendRequest">
      Solicitar amistad
    </form-tg-button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TgProfileHeaderActions',
  computed: {
    ...mapGetters({
      user: 'profile/user',
    }),
    canSendFriendRequest() {
      return this.$auth.user.user_id !== parseInt(this.user.user_id)
    },
  },
}
</script>
