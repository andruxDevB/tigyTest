<template>
  <div class="-mt-px flex divide-x divide-gray-200">
    <tg-friends-requests-actions-button
      type="primary"
      :loading="loadingConfirm"
      @click.native="confirm()"
      >Confirmar</tg-friends-requests-actions-button
    >
    <tg-friends-requests-actions-button
      >Ignorar</tg-friends-requests-actions-button
    >
  </div>
</template>
<script>
export default {
  name: 'TgFriendsRequestsActionsReceived',
  props: {
    friend: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loadingConfirm: false,
    }
  },
  methods: {
    confirm() {
      this.loadingConfirm = true
      try {
        this.$store.dispatch('friends/requests/confirm', { id: this.friend.id })
      } finally {
        this.loadingConfirm = false
      }
    },
  },
}
</script>
