<template>
  <div
    class="flex-1 rounded-t-lg font-semibold flex items-center justify-center border-t-2 border-l-2 border-r-2 border-inset relative"
    :style="{
      background: isCompleted ? level.fondo : '',
      borderColor: level.fondo,
      height: `${height}px`,
    }"
  >
    <v-popover placement="top" trigger="hover" class="w-full h-full">
      <div
        class="w-full absolute bottom-0 z-10"
        :style="{
          background: level.fondo,
          height: `${completed}%`,
        }"
      ></div>
      <div
        class="w-full absolute bottom-0 z-0 h-full opacity-10"
        :style="{
          background: level.fondo,
        }"
      ></div>
      <template slot="popover">
        <h4 class="font-bold text-white">
          {{ level.descripcion }}
        </h4>
        <h5 class="text-white opacity-80 mb-2">
          <span class="font-bold text-white">{{ completed }}%</span> completo
        </h5>
        <ul>
          <li
            v-for="(item, index) in requirements"
            :key="`requirement-item-${index}`"
            class="flex"
          >
            <outline-check-icon
              v-if="item.logrado === 100"
              class="h-5 w-5 text-green-500"
            ></outline-check-icon>
            <outline-x-icon
              v-else
              class="h-5 w-5 text-red-500"
            ></outline-x-icon>
            <span class="text-xs text-white">{{ item.descripcion }}</span>
          </li>
        </ul>
      </template>
    </v-popover>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: 'TgProfileIdProgress',
  props: {
    level: {
      type: Object,
      required: true,
    },
  },
  computed: {
    height() {
      return this.level.snivel_id * 10 + this.level.snivel_id * 10 + 20
    },
    requirements() {
      return _.map(this.level.indicadores, function (item) {
        item.logrado = parseInt(item.logrado.replace('%', ''))
        item.conquistar = parseInt(item.conquistar.replace('%', ''))
        return item
      })
    },
    completed() {
      return _.sumBy(this.requirements, function (req) {
        return (req.logrado * req.peso) / 100
      })
    },
    isCompleted() {
      return this.completed === 100
    },
  },
}
</script>
<style>
.v-popover .trigger {
  display: block !important;
  height: 100%;
}
</style>
