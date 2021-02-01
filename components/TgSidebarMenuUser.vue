<template>
  <div class="p-12">
    <img
      class="inline-block h-14 w-14 rounded-full border- border-white shadow-lg"
      :src="user.foto"
      :alt="user.username"
    />
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
