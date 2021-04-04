import like from '@/utils/events/like'

export const HELPERS_ALIAS = 'tg'

export const helpers = {
  events: {
    like,
  },
}

export default (context, inject) => {
  inject(HELPERS_ALIAS, helpers)
}
