<template>
  <div>
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Recupera tu cuenta
      </h2>
    </div>
    <ValidationObserver
      ref="observer"
      class="mt-8 space-y-6"
      tag="form"
      @submit.prevent="updatePassword"
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

      <ValidationProvider
        v-slot="{ errors }"
        rules="required"
        name="password"
        slim
      >
        <form-tg-input
          v-model="model.password"
          type="password"
          name="password"
          :errors="errors"
          >Contraseña</form-tg-input
        >
      </ValidationProvider>

      <ValidationProvider
        v-slot="{ errors }"
        rules="required"
        name="password_confirmation"
        slim
      >
        <form-tg-input
          v-model="model.password_confirmation"
          type="password"
          name="password_confirmation"
          :errors="errors"
          >Confirmar Contraseña</form-tg-input
        >
      </ValidationProvider>

      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Actualizar Contraseña
        </button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  comments: {
    ValidationObserver,
    ValidationProvider,
  },
  layout: 'auth',
  transition: 'slide-bottom',
  data() {
    return {
      isLoading: true,
      model: {
        email: '',
        token: '',
        origen: 'F',
      },
    }
  },
  mounted() {
    this.setData()
  },
  methods: {
    async updatePassword() {
      this.isLoading = true
      try {
        const isValid = await this.$refs.observer.validate()
        if (isValid) {
          this.$axios
            .post('/intro/password/store', this.model, {
              headers: {
                Authorization: this.model.token,
              },
            })
            .then(() => {
              this.$toast.success('Contraseña actualizada exitosamente')
              this.$router.push('/auth/login')
            })
        }
      } catch (error) {
      } finally {
        this.isLoading = false
      }
    },

    setData() {
      this.model = {
        ...this.$route.query,
      }
    },
  },
}
</script>
