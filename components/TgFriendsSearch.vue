<template>
  <div class="max-w-lg w-full lg:max-w-xs">
    <label for="search" class="sr-only">{{ label }}</label>
    <div class="relative text-gray-400 focus-within:text-gray-500">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
      >
        <solid-search-icon class="h-5 w-5"></solid-search-icon>
      </div>
      <input
        id="search"
        :value="value"
        class="block w-full bg-white py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:placeholder-gray-500 sm:text-sm"
        :placeholder="label"
        type="search"
        name="search"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgFriendsSearch',
  props: {
    value: {
      type: null,
      default: null,
    },
    label: {
      type: String,
      default: 'Buscar',
    },
  },
}
</script>
