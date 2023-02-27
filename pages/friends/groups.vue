<template>
  <tg-friends-groups :groups="groups"></tg-friends-groups>
</template>
<script>
export default {
  data() {
    return {
      friends: [],
    }
  },
  async fetch() {
    this.groups = await this.$store.dispatch('friends/getList')
  },
  head() {
    return {
      title: 'Colaboradores Selección Múltiple',
    }
  },
}
</script>
