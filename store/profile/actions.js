import { map } from 'lodash'

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
          labels: map(graph.actitudes.info, 'label'),
          datasets: [
            {
              data: map(graph.actitudes.info, 'valor'),
              backgroundColor: 'rgba(74,169,210,0.5)',
              borderColor: 'rgba(74,169,210,0.9)',
            },
          ],
        },
        coins: {
          labels: map(graph.monedas.info, 'label'),
          datasets: [
            {
              data: map(graph.monedas.info, 'valor'),
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
  async updateAccount({ commit }, payload) {
    try {
      const response = await this.$api.$put(`/cuenta/cambio`, payload)
      const account = response.data.cuenta
      commit('SET_ACCOUNT', account)
      return account
    } catch (e) {
      console.error(e)
    }
  },
  async getTransactions({ commit }, payload) {
    try {
      console.log(payload)
      const userId = this.$auth.user.user_id
      const response = await this.$api.$get(`/monedas/${userId}`, {
        params: payload,
      })
      const transactions = response.data.monedas
      return transactions
    } catch (e) {
      console.error(e)
    }
  },
}
