<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <tg-profile-id-stats-item title>
        <template #title> Valores</template>
        <radar-chart
          :chart-data="data.values"
          :options="radarOptions"
        ></radar-chart>
      </tg-profile-id-stats-item>
      <tg-profile-id-stats-item>
        <template #title> Saldo monedas</template>
        <line-chart
          class="mt-5"
          :chart-data="data.coins"
          :options="radarOptions"
        ></line-chart>
      </tg-profile-id-stats-item>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'TgProfileIdValuesGratitude',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      radarOptions: {
        resposive: true,
        legend: false,
      },
    }
  },
}
</script>
