export default {
  async getReceived({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/solicitudes/${userId}`)
      const requests = response.data.invitaciones
      return requests
    } catch (e) {
      console.error(e)
    }
  },
  async getSended({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/invitaciones/${userId}`)
      const requests = response.data.invitaciones
      return requests
    } catch (e) {
      console.error(e)
    }
  },
}
