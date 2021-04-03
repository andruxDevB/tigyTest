export default {
  async getWithGroups({ commit }, payload) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/lamigos/${userId}`)
      const friends = response.data.lamigos.amigos
      commit('SET_FRIENDS', response.data.lamigos.amigos)
      commit('SET_GROUPS', response.data.lamigos.dgrupos)
      return friends
    } catch (e) {
      console.error(e)
    }
  },
}
