import { TOGGLE_MOBILE } from './types'

export default {
  [TOGGLE_MOBILE](state) {
    state.mobile = !state.mobile
  },
}
