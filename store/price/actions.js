export default {
  async send({ commit }, payload) {
    try {
      const data = {
        asunto: payload.subject,
        cantidad_id: payload.quantity,
        tipoayuda_id: payload.privacy,
        saldo: payload.balance,
        user_id: this.$auth.user.user_id,
        ...payload.requestDestination,
      }
      const response = await this.$axios.$post('/pedir', data)
      return response.data
    } catch (e) {
      console.error(e)
    }
  },
}
