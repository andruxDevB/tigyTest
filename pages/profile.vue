<template>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <tg-profile :navigation="navigation"></tg-profile>
</template>
<script>
export default {
  data() {
    return {
      navigation: [
        { label: 'Tigy ID', link: '/profile' },
        // { label: 'Tigy Line', link: '/profile/timeline' },
        { label: 'Información personal', link: '/profile/info' },
        { label: 'Transacciones', link: '/profile/transactions' },
      ],
    }
  },
  async fetch() {
    const userId = this.$auth.user.user_id
    await this.$store.dispatch('profile/getByUserId', { userId })
  },
}
</script>
