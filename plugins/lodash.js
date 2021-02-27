import Vue from 'vue'
import VueLodash from 'vue-lodash'
import get from 'lodash/get'
import map from 'lodash/map'
import head from 'lodash/head'
import value from 'lodash/value'
import random from 'lodash/random'
import findKey from 'lodash/findKey'
import groupBy from 'lodash/groupBy'
import orderBy from 'lodash/orderBy'
import includes from 'lodash/includes'

// name is optional
Vue.use(VueLodash, {
  name: 'custom',
  lodash: {
    get,
    map,
    head,
    value,
    random,
    findKey,
    groupBy,
    orderBy,
    includes,
  },
})
