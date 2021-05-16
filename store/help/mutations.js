import { TOGGLE_SIDEBAR, SET_REQUEST_DESTINATION } from './types'

export default {
  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar
  },

  [SET_REQUEST_DESTINATION](state, payload) {
    state.requestDestination = payload
  },
}
