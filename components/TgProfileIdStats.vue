<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <tg-profile-id-stats-item title>
        <template #title> Ranking</template>
        <div class="flex justify-between">
          <div>
            <span class="block text-4xl font-semibold text-gray-900">
              {{ stats.ranking.puntos }}</span
            >
            <span class="mt-2 text-sm font-medium text-gray-500"> puntos </span>
          </div>
          <div class="relative w-28">
            <vue-svg-gauge
              :start-angle="-110"
              :end-angle="110"
              :value="stats.ranking.ranking"
              :separator-step="3"
              :min="0"
              :max="100"
              gauge-color="#36AAD3"
              :scale-interval="3"
            />
            <div
              class="absolute bottom-3 w-full text-center font-normal lg:text-xl text-blue-500"
            >
              {{ stats.ranking.ranking | percentage }}
            </div>
          </div>
        </div>
      </tg-profile-id-stats-item>
      <tg-profile-id-stats-item>
        <template #title> Ayuda</template>
        <div class="flex justify-between">
          <div>
            <span class="block text-4xl font-semibold text-gray-900">
              {{ stats.ranking.pedir }}</span
            >
            <span class="mt-2 text-sm font-medium text-gray-500">
              solicitadas
            </span>
          </div>
          <div>
            <span class="block text-4xl font-semibold text-gray-900">
              {{ stats.ranking.ayudar }}</span
            >
            <span class="mt-2 text-sm font-medium text-gray-500">
              ejecutadas
            </span>
          </div>
        </div>
      </tg-profile-id-stats-item>
      <tg-profile-id-stats-item>
        <template #title> Nivel</template>
        <div>
          <span class="block text-4xl font-semibold text-gray-900">
            {{ stats.ranking.nivel }}</span
          >
          <span class="mt-2 text-sm font-medium text-gray-500">
            {{ stats.ranking.significado }}
          </span>
        </div>
      </tg-profile-id-stats-item>
    </dl>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TgProfileIdStats',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      stats: 'profile/stats',
    }),
  },
}
</script>
