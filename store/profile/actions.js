export default {
  async get({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$post(`/cuenta`, {
        user_id: userId,
      })
      const account = response.data.cuenta
      commit('SET_ACCOUNT', account)
      return account
    } catch (e) {
      console.error(e)
    }
  },

  async getLevel({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/vsaldos/${userId}`)
      const level = response.data.saldos
      return level
    } catch (e) {
      console.error(e)
    }
  },
}
