import { SET_EMOTIONS } from './types'

export default {
  [SET_EMOTIONS](state, payload) {
    const { attitudes, values } = payload
    state.attitudes = attitudes
    state.values = values
  },
}
