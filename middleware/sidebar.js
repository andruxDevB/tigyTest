export default function ({ store, route }) {
  /**
   * Set side bars or modales to hide when a route change
   */
  store.commit('notifications/HIDE_SIDEBAR')
}
