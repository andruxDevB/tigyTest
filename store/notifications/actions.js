import head from 'lodash/head'

export default {
  async getUser({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$axios.$get(`/alertas/${userId}`)
      const { alert_info: alerts, quantity: count } = head(response.data.alerts)
      commit('SET_USER_ALERTS', alerts)
      commit('SET_USER_COUNT', count)
    } catch (e) {
      console.error(e)
    }
  },
  async getNetwork({ commit }) {
    try {
      const response = await this.$axios.$get(`/novedades`)
      const events = response.data.news_info
      commit('SET_EVENTS', events)
    } catch (e) {
      console.error(e)
    }
  },
}
