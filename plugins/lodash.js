import Vue from 'vue'
import VueLodash from 'vue-lodash'
import get from 'lodash/get'
import map from 'lodash/map'
import head from 'lodash/head'
import take from 'lodash/take'
import chain from 'lodash/chain'
import value from 'lodash/value'
import random from 'lodash/random'
import findKey from 'lodash/findKey'
import groupBy from 'lodash/groupBy'
import orderBy from 'lodash/orderBy'
import includes from 'lodash/includes'
import cloneDeep from 'lodash/cloneDeep'
import isUndefined from 'lodash/isUndefined'

// name is optional
Vue.use(VueLodash, {
  name: 'custom',
  lodash: {
    get,
    map,
    head,
    take,
    chain,
    value,
    random,
    findKey,
    groupBy,
    orderBy,
    includes,
    cloneDeep,
    isUndefined,
  },
})
