<template>
  <nav class="flex-1 px-2 space-y-1">
    <tg-sidebar-menu-nav-item
      v-for="(item, index) in navItems"
      :key="`nav-item-${index}`"
      :item="item"
    />
    <a
      href="javascript:void(0)"
      class="
        text-gray-600
        hover:bg-gray-50 hover:text-gray-900
        group
        flex
        items-center
        px-2
        py-2
        text-sm
        font-medium
        rounded-md
      "
      @click="logout()"
    >
      <outline-logout-icon
        class="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
      />
      Salir
    </a>
  </nav>
</template>
<script>
export default {
  name: 'TgSidebarMenuNav',
  computed: {
    user() {
      return this.$auth.user
    },
    navItems() {
      let nav = []
      switch (this.$auth.user.rol_id) {
        case 7:
          nav = this.$store.state.nav.itemsAdmin
          break
        case 6:
        case 3:
          nav = this.$store.state.nav.items
          break
      }
      return nav
    },
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
