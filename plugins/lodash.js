import Vue from 'vue'
import VueLodash from 'vue-lodash'
import findKey from 'lodash/findKey'
import includes from 'lodash/includes'

// name is optional
Vue.use(VueLodash, {
  name: '_',
  lodash: {
    findKey,
    includes,
  },
})
