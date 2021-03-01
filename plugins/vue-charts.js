import Vue from 'vue'
import { Radar } from 'vue-chartjs'

const registerComponent = function (name, originalComponent) {
  Vue.component(name, {
    extends: originalComponent,
    props: ['data', 'options', 'styles'],
    mounted() {
      this.renderChart(this.data, this.options)
    },
  })
}

registerComponent('RadarChart', Radar)
