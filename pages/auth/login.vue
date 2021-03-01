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
    <ValidationObserver
      ref="observer"
      class="mt-8 space-y-6"
      tag="form"
      @submit.prevent="userLogin"
    >
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|email"
        name="email"
        slim
      >
        <tg-input
          v-model="auth.login"
          type="email"
          name="email"
          :errors="errors"
          >Email</tg-input
        >
      </ValidationProvider>
      <ValidationProvider
        v-slot="{ errors }"
        rules="required"
        name="contraseña"
        slim
      >
        <tg-input
          v-model="auth.password"
          type="password"
          name="password"
          :errors="errors"
          >Contraseña</tg-input
        >
      </ValidationProvider>

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
        <tg-button custom-class="w-full" :loading="loading">
          Inicia sesión
        </tg-button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
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
      try {
        this.loading = true
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          await this.$auth.loginWith('local', {
            data: this.auth,
          })
        }
      } catch (err) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
