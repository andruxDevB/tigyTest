export default {
  async send({ commit }, payload) {
    try {
      const params = {
        user_id: this.$auth.user.user_id,
        evento_id: payload.postId,
        mensaje: payload.subject,
      }
      const response = await this.$api.$post(`/reportar`, params)
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  },
}
