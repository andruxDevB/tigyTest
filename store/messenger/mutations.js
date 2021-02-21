import { SET_CONTACTS, SET_THREAD } from './types'

export default {
  [SET_CONTACTS](state, payload) {
    state.contacts = payload
  },
  [SET_THREAD](state, payload) {
    state.thread = payload
  },
}
