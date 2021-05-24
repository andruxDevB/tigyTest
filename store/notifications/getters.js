import find from 'lodash/find'

export default {
  sidebar(state) {
    return state.sidebar
  },
  alerts(state) {
    return state.alerts
  },
  count(state) {
    return find(state.alerts, { viewed: false }).length
  },
  events(state) {
    return state.events
  },
}
