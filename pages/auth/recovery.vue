<template>
  <div>
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Recupera tu contraseña
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        ¿Ya tienes cuenta?
        <NuxtLink
          to="/auth/login"
          class="font-medium text-purple-600 hover:text-purple-500"
          prefetch
          >Inicia sesión
        </NuxtLink>
      </p>
    </div>
    <ValidationObserver
      ref="observer"
      class="mt-8 space-y-6"
      tag="form"
      @submit.prevent="userRecovery"
    >
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|email"
        name="email"
        slim
      >
        <form-tg-input
          v-model="model.email"
          type="email"
          name="email"
          :errors="errors"
          >Email</form-tg-input
        >
      </ValidationProvider>
      <div>
        <form-tg-button custom-class="w-full" :loading="loading">
          Recuperar
        </form-tg-button>
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
      model: {
        email: '',
      },
    }
  },
  methods: {
    async userRecovery() {
      this.loading = true
      try {
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          this.$axios
            .post('/intro/password/email', this.model)
            .then((response) => {
              this.$toast.success(
                'Un correo de cambio de contraseña se ha enviado a su correo, favor seguir las instrucciones'
              )
              this.$router.push({
                path: '/password/reset',
                query: {
                  token: response.data.token,
                  email: this.model.email,
                },
              })
            })
        }
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
