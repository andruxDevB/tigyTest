export default {
  async send({ commit }, payload) {
    try {
      const data = {
        amigo_id: payload.contact.id,
        cantidad_id: payload.quantity.value,
        e_fecha: payload.date,
        id_actitud: [payload.attitudes.id],
        id_valor: [payload.values.id],
        lista_correos: null,
        medio_id: 2, // TODO: Verificar de donde sale este id
        motivo: payload.subject,
        saldo: payload.balance,
        tipovalor_id: 1, // TODO: Verificar de donde sale este id
        user_id: this.$auth.user.user_id,
      }
      const response = await this.$axios.$post('/enviar', data)
      return response.data
    } catch (e) {
      console.error(e)
    }
  },
}
