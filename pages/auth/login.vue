<template>
  <div>
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Ingresa a tu cuenta
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        ¿No tienes cuenta?
        <NuxtLink
          to="/auth/register"
          class="font-medium text-purple-600 hover:text-purple-500"
          prefetch
          >Regístrate</NuxtLink
        >
      </p>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="userLogin">
      <div>
        <label for="login" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input
            id="login"
            v-model="auth.login"
            name="login"
            type="email"
            autocomplete="email"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="space-y-1">
        <label for="password" class="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <div class="mt-1">
          <input
            id="password"
            v-model="auth.password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="text-sm">
          <NuxtLink
            to="/auth/recovery"
            class="font-medium text-purple-600 hover:text-purple-500"
            prefetch
            >¿Olvidaste tu contraseña?</NuxtLink
          >
        </div>
      </div>

      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Inicia sesión
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  transition: 'slide-bottom',
  data() {
    return {
      loading: false,
      auth: {
        login: '',
        password: '',
        origen: 'F',
      },
    }
  },
  methods: {
    async userLogin() {
      this.loading = true
      try {
        await this.$auth.loginWith('local', {
          data: this.auth,
        })
      } catch (err) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
