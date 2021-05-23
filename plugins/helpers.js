import like from '@/utils/events/like'
import getGroup from '@/utils/emotions/getGroup'

export const HELPERS_ALIAS = 'tg'

export const helpers = {
  events: {
    like,
  },
  emotions: {
    getGroup,
  },
}

export default (context, inject) => {
  inject(HELPERS_ALIAS, helpers)
}
