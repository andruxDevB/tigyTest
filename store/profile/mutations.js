import { SET_PROFILE } from './types'

export default {
  [SET_PROFILE](state, payload) {
    const { account, saldos, usuario } = payload
    state.account = account
    state.stats = saldos
    state.user = usuario
  },
}
