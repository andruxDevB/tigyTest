export default {
  async getList({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$axios.$get(`/emocion/${userId}`)
      const emotions = {
        attitudes: this.$tg.emotions.getGroup(1, response.data.emocion),
        values: this.$tg.emotions.getGroup(2, response.data.emocion),
      }
      commit('SET_EMOTIONS', emotions)
      return emotions
    } catch (e) {
      console.error(e)
    }
  },
}
