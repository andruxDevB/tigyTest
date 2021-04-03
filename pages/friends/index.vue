<template>
  <tg-friends :friends="friends"></tg-friends>
</template>
<script>
export default {
  data() {
    return {
      friends: [],
    }
  },
  async fetch() {
    this.friends = await this.$store.dispatch('friends/getList')
  },
}
</script>
