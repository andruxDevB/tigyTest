import Vue from 'vue'
import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

const registerComponent = function (name, originalComponent) {
  Vue.component(name, {
    extends: originalComponent,
    mixins: [reactiveProp],
    props: ['chart-data', 'options', 'styles'],
    mounted() {
      this.renderChart(this.data, this.options)
    },
  })
}

registerComponent('RadarChart', Radar)
