export default function ({ store, $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create()

  api.setBaseURL(`${process.env.API_URL}`)

  api.interceptors.request.use(function (config) {
    if (store.$auth.loggedIn) {
      const token = store.$auth.strategy.token.get()
      api.setHeader('Authorization', token)
    }
    return config
  })

  // Inject to context as $api
  inject('api', api)
}
