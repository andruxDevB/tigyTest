<template>
  <div class="p-12 pb-6 flex content-center">
    <tg-avatar
      size="6xl"
      :image="user.foto"
      :alt="user.username"
      custom-class="border-3 border-white shadow-lg"
    ></tg-avatar>
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
