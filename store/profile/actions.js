export default {
  async getByUserId({ commit }, payload) {
    try {
      const response = await this.$api.$get(`/info/${payload.userId}`)
      const profile = response.data.info
      commit('SET_PROFILE', profile)
      return profile
    } catch (e) {
      console.error(e)
    }
  },
  async getGraphByUserId({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/vgraficos/${userId}`)
      const graph = response.data.graficos

      return {
        values: {
          labels: JSON.parse(graph.actitudes_labels.replace(/'/g, '"')),
          datasets: [
            {
              data: JSON.parse(graph.actitudes_datos.replace(/'/g, '"')),
              backgroundColor: 'rgba(74,169,210,0.5)',
              borderColor: 'rgba(74,169,210,0.9)',
            },
          ],
        },
        coins: {
          labels: JSON.parse(graph.monedas_labels.replace(/'/g, '"')),
          datasets: [
            {
              data: JSON.parse(graph.monedas_datos.replace(/'/g, '"')),
              backgroundColor: 'rgba(157,96,251,0.5)',
              borderColor: 'rgba(157,96,251,0.9)',
            },
          ],
        },
      }
    } catch (e) {
      console.error(e)
    }
  },
}
