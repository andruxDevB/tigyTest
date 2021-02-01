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
          >Inicia sesión</NuxtLink
        >
      </p>
    </div>
    <form action="#" method="POST" class="mt-8 space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div class="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Recuperar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  transition: 'slide-bottom',
}
</script>
