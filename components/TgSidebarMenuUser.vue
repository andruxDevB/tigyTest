<template>
  <div class="p-12 pb-6">
    <img
      class="inline-block rounded-full border-3 border-white shadow-lg"
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
