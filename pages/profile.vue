<template>
  <div>
    <tg-profile :navigation="navigationItems"></tg-profile>
  </div>
</template>
<script>
const navigationAdmin = [
  { label: 'Información personal', link: '/profile/info' },
  { label: 'Transacciones', link: '/profile/transactions' },
]

const defaultNavigation = [
  { label: 'Tigy ID', link: '/profile' },
  ...navigationAdmin,
]
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
  computed: {
    navigationItems() {
      let nav = []
      switch (this.$auth.user.rol_id) {
        case 7:
          nav = navigationAdmin
          break
        case 6:
        case 3:
          nav = defaultNavigation
          break
      }
      return nav
    },
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
