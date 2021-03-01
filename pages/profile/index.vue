<template>
  <div>
    <tg-profile-id-stats></tg-profile-id-stats>
    <tg-profile-id-values-gratitude></tg-profile-id-values-gratitude>
  </div>
</template>

<script>
export default {
  data() {
    return {
      graphData: [],
    }
  },
  async fetch() {
    // this.graphData = await this.$store.dispatch('profile/getGraphByUserId')
  },
}
</script>
