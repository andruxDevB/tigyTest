import { SET_EVENTS } from './types'

export default {
  [SET_EVENTS](state, payload) {
    state.events = payload
  },
}
