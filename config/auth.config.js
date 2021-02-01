export default {
  strategies: {
    local: {
      token: {
        property: 'data.access.token',
        // required: true,
        // type: 'Bearer'
      },
      user: {
        property: 'data.info.usuario',
        // autoFetch: true
      },
      endpoints: {
        login: { url: '/intro/login', method: 'post' },
        // logout: { url: '/api/auth/logout', method: 'post' },
        logout: false,
        user: { url: '/info_web', method: 'get' },
      },
    },
  },
  redirect: {
    login: '/auth/login',
    logout: '/auth/login',
    home: '/',
  },
}
