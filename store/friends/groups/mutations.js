import { TOGGLE_SIDEBAR } from './types'

export default {
  [TOGGLE_SIDEBAR](state) {
    state.sidebar = !state.sidebar
  },
}
