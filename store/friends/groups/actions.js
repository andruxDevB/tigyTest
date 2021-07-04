export default {
  async create({ commit }, payload) {
    try {
      const params = {
        user_id: this.$auth.user.user_id,
        alias: payload.alias,
        nombre: payload.name,
        prioridad: payload.priority,
      }
      const response = await this.$api.$post(`/dgrupos/create`, params)
      return response
    } catch (e) {
      console.error(e)
      throw e
    }
  },
}
