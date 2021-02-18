export default {
  async getCountryList({ commit }) {
    try {
      const response = await this.$axios.$get('/paises')
      return response.data.paises
    } catch (e) {
      console.error(e)
    }
  },
}
