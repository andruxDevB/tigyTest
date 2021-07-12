export default {
  async findByQuery({ commit }, payload) {
    try {
      if (!payload.query) return []
      const response = await this.$api.$get(`/busqueda/${payload.query}`)
      const results = response.data.search_info
      return results
    } catch (e) {
      console.error(e)
    }
  },
}
