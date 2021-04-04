<template>
  <div class="p-12 pb-6 flex content-center">
    <common-tg-avatar
      size="6xl"
      :image="user.foto"
      :alt="user.username"
      custom-class="border-3 border-white shadow-lg"
    ></common-tg-avatar>
  </div>
</template>
<script>
export default {
  name: 'TgSidebarMenuUser',
  computed: {
    user() {
      return this.$auth.user
    },
  },
}
</script>
