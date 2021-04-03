import { SET_FRIENDS, SET_GROUPS } from './types'

export default {
  [SET_FRIENDS](state, payload) {
    state.list = payload
  },
  [SET_GROUPS](state, payload) {
    state.groups = payload
  },
}
