import find from 'lodash/find'
import get from 'lodash/get'
import isUndefined from 'lodash/isUndefined'

import { SET_EVENTS, ADD_COMMENT_POST, SET_POST } from './types'

export default {
  [SET_EVENTS](state, payload) {
    state.events = payload
  },
  [SET_POST](state, payload) {
    state.post = payload
  },
  [ADD_COMMENT_POST](state, payload) {
    let comments = get(
      find(state.events, {
        evento: { evento_id: payload.evento_id },
      }),
      'evento.comments_info.comments'
    )
    if (isUndefined(comments)) comments = []
    comments.push(payload)
  },
}
