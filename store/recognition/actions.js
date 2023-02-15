export default {
  async send({ commit }, payload) {
    try {
      const data = {
        user_id: this.$auth.user.user_id,
        amigo_id: payload.contact.id,
        cantidad_id: payload.quantity.value,
        motivo: payload.motivo,
        tipovalor_id: 1, // TODO: Verificar de donde sale este id
        valores: [payload.values.id],
        actitudes: [payload.attitudes.id],
      }
      const response = await this.$axios.$post('/reconocer', data)
      return response.data
    } catch (e) {
      console.error(e)
    }
  },
}
