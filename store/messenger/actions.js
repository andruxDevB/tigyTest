export default {
  async getContacts({ commit }) {
    try {
      const userId = this.$auth.user.user_id
      const response = await this.$api.$post(`/contact_chat`, {
        user_id: userId,
      })
      const contacts = response.data.contacts_info
      commit('SET_CONTACTS', contacts)
      return contacts
    } catch (e) {
      console.error(e)
    }
  },
  async getThread({ commit }, payload) {
    try {
      const userId = this.$auth.user.user_id
      const { chatId } = payload
      const response = await this.$api.$post(`/ver_chat`, {
        user_id: userId,
        gchat_id: chatId,
      })
      const thread = response.data.chat_info[0]
      commit('SET_THREAD', thread)
    } catch (e) {
      console.error(e)
    }
  },
}
