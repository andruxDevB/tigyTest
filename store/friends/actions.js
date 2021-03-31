export default {
  async getList({ commit }, payload) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/lamigos/${userId}`)
      const connections = response.data.lamigos.amigos
      return connections
    } catch (e) {
      console.error(e)
    }
  },
}
