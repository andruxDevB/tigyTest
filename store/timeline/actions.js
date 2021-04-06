import random from 'lodash/random'

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
      const events = response.data.mired
      commit('SET_EVENTS', events)
      return events
    } catch (e) {
      console.error(e)
    }
  },
  async like({ commit }, payload) {
    try {
      const { eventId } = payload

      const params = {
        user_id: this.$auth.user.user_id,
        evento_id: eventId,
      }

      await this.$api.$post(`/gustas`, params)
    } catch (e) {
      console.error(e)
    }
  },
  async comment({ commit }, payload) {
    try {
      const { eventId, message } = payload

      const comment = {
        evento_id: eventId,
        comment: message,
        id: random(1, 99999999),
        created_at: {
          date: Date.now(),
        },
        user: {
          full_name: this.$auth.user.nameuser,
          image: this.$auth.user.foto,
          id: this.$auth.user.user_id,
        },
      }

      commit('ADD_COMMENT_POST', comment)

      const params = {
        user_id: this.$auth.user.user_id,
        evento_id: eventId,
        mensaje: message,
      }
      await this.$api.$post(`/comentar`, params)
    } catch (e) {
      console.error(e)
    }
  },
}
