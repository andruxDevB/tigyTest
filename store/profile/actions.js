export default {
  async getByUserId({ commit }, payload) {
    try {
      const response = await this.$api.$get(`/info/${payload.userId}`)
      const profile = response.data.info
      commit('SET_PROFILE', profile)
      return profile
    } catch (e) {
      console.error(e)
    }
  },
}
