import Vue from 'vue'
import VueLodash from 'vue-lodash'
import head from 'lodash/head'
import findKey from 'lodash/findKey'
import includes from 'lodash/includes'

// name is optional
Vue.use(VueLodash, {
  name: 'custom',
  lodash: {
    head,
    findKey,
    includes,
  },
})
