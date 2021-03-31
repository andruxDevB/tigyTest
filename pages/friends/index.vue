<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <tg-friends-item
      v-for="(friend, index) in friends"
      :key="`frient-card-${index}`"
      :friend="friend"
    ></tg-friends-item>
  </ul>
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
