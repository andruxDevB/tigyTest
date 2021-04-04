import { SET_CONTACTS, SET_THREAD, PUSH_MESSAGE, SET_VISIBILITY } from './types'

export default {
  [SET_CONTACTS](state, payload) {
    state.contacts = payload
  },
  [SET_THREAD](state, payload) {
    state.thread = payload
  },
  [PUSH_MESSAGE](state, payload) {
    state.thread.info.push(payload)
  },
  [SET_VISIBILITY](state, payload) {
    state.show = payload
  },
}
