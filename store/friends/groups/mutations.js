import { TOGGLE_SIDEBAR, TOGGLE_SIDEBAR_LIST, SET_INFO } from './types'

export default {
  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar
  },
  [TOGGLE_SIDEBAR_LIST](state) {
    state.sidebarList = !state.sidebarList
  },
  [SET_INFO](state, payload) {
    state.info = payload
  },
}
