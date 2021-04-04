<template>
  <tg-friends-groups :groups="groups"></tg-friends-groups>
</template>
<script>
export default {
  data() {
    return {
      groups: [],
    }
  },
  async fetch() {
    this.groups = await this.$store.dispatch('friends/getGroups')
  },
}
</script>
