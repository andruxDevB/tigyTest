import find from 'lodash/find'
import get from 'lodash/get'

import { SET_EVENTS, ADD_COMMENT_POST, SET_POST } from './types'

export default {
  [SET_EVENTS](state, payload) {
    state.events = payload
  },
  [SET_POST](state, payload) {
    state.post = payload
  },
  [ADD_COMMENT_POST](state, payload) {
    const comments = get(
      find(state.events, {
        evento: { evento_id: payload.evento_id },
      }),
      'evento.comments_info.comments',
      []
    )
    comments.push(payload)

    if (state.post && state.post.evento_id === payload.evento_id) {
      const comments = get(state.post, 'comments_info.comments', [])
      comments.push(payload)
    }
  },
}
