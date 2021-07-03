import { TOGGLE_SIDEBAR, SET_POST_ID } from './types'

export default {
  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar
  },
  [SET_POST_ID](state, payload) {
    state.postId = payload.postId
  },
}
