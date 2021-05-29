export default {
  async share({ commit }, payload) {
    try {
      const params = {
        user_id: this.$auth.user.user_id,
        evento_id: payload.eventId,
        tipoayuda_id: payload.shareId,
      }

      const response = await this.$api.$post(`/compartir`, params)

      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  },
}
