<template>
  <div>
    <tg-profile :navigation="navigation"></tg-profile>
  </div>
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
  head() {
    return {
      title: 'Mi perfil',
    }
  },
}
</script>
