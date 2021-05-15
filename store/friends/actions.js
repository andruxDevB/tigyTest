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
  async getGroups({ commit }, payload) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/grupos/${userId}`)
      const groups = response.data.groups
      return groups
    } catch (e) {
      console.error(e)
    }
  },

  async findByEmail({ commit }, payload) {
    try {
      const { email } = payload
      if (!email) return []
      const response = await this.$api.$get(`/buscar/${email}`)
      const users = response.data.user_list
      return users
    } catch (e) {
      console.error(e)
    }
  },
}
