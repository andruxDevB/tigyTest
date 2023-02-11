<template>
  <div>
    <!--<tg-profile-id-progress :progress="progress"></tg-profile-id-progress>-->
    <!--<tg-profile-id-stats></tg-profile-id-stats>-->
    <tg-profile-id-values-gratitude
      :data="graphData"
    ></tg-profile-id-values-gratitude>
  </div>
</template>

<script>
export default {
  data() {
    return {
      graphData: {},
      levels: [],
      progress: [],
    }
  },
  async fetch() {
    this.graphData = await this.$store.dispatch('profile/getGraphByUserId', {
      userId: this.$auth.user.user_id,
    })
    this.progress = await this.$store.dispatch('profile/getLevelByUserId', {
      userId: this.$auth.user.user_id,
    })
  },
}
</script>
