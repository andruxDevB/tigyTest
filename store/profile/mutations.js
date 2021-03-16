import { SET_PROFILE, SET_ACCOUNT } from './types'

export default {
  [SET_PROFILE](state, payload) {
    const { account, saldos, usuario } = payload
    state.account = account
    state.stats = saldos
    state.user = usuario
  },
  [SET_ACCOUNT](state, payload) {
    state.account = payload
  },
}
