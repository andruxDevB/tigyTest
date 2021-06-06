<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <h1 class="text-sm font-medium text-gray-500 truncate px-4 py-5 sm:p-6">
      Progreso del perfil
    </h1>
    <div class="px-4 pt-5 sm:px-6 sm:pt-6 flex space-x-4 items-end">
      <tg-profile-id-progress-item
        v-for="(level, index) in progress"
        :key="`level-column-${index}`"
        :level="level"
      ></tg-profile-id-progress-item>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgProfileIdProgress',
  props: {
    progress: {
      type: Array,
      required: true,
    },
  },
}
</script>
