export default {
  async get({ commit }, payload) {
    try {
      const userId = this.$auth.user.user_id
      const days = 30
      const limit = 20
      const page = 1

      const response = await this.$api.$get(
        `/historias/${userId}/${days}/${limit}/${page}`
      )
      return response.data.mired
    } catch (e) {
      console.error(e)
    }
  },
}
