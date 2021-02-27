import { SET_ACCOUNT } from './types'

export default {
  [SET_ACCOUNT](state, payload) {
    state.account = payload
  },
}
