import Vue from 'vue'
import VueLodash from 'vue-lodash'
import get from 'lodash/get'
import head from 'lodash/head'
import findKey from 'lodash/findKey'
import includes from 'lodash/includes'

// name is optional
Vue.use(VueLodash, {
  name: 'custom',
  lodash: {
    get,
    head,
    findKey,
    includes,
  },
})
