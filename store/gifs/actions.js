export default {
  async getList({ commit }, payload) {
    try {
      const companyId = this.$auth.user.empresa_id
      const response = await this.$api.$get(`/premios/${companyId}`)
      const gifs = response.data.premios
      return gifs
    } catch (e) {
      console.error(e)
    }
  },

  async ask({ commit }, payload) {
    try {
      const { premioId, userId } = payload
      const response = await this.$api.$post(`/pide`, {
        premio_id: premioId,
        user_id: userId,
      })
      const gifs = response.data.premios
      return gifs
    } catch (e) {
      console.error(e)
    }
  },
}
