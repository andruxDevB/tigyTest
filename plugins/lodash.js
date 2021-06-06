import Vue from 'vue'
import VueLodash from 'vue-lodash'
import get from 'lodash/get'
import map from 'lodash/map'
import head from 'lodash/head'
import take from 'lodash/take'
import sumBy from 'lodash/sumBy'
import chain from 'lodash/chain'
import value from 'lodash/value'
import slice from 'lodash/slice'
import random from 'lodash/random'
import flatten from 'lodash/flatten'
import findKey from 'lodash/findKey'
import isMatch from 'lodash/isMatch'
import groupBy from 'lodash/groupBy'
import orderBy from 'lodash/orderBy'
import includes from 'lodash/includes'
import debounce from 'lodash/debounce'
import cloneDeep from 'lodash/cloneDeep'
import findIndex from 'lodash/findIndex'
import isUndefined from 'lodash/isUndefined'

// name is optional
Vue.use(VueLodash, {
  name: 'custom',
  lodash: {
    get,
    map,
    head,
    take,
    sumBy,
    chain,
    value,
    slice,
    random,
    flatten,
    findKey,
    isMatch,
    groupBy,
    orderBy,
    includes,
    debounce,
    cloneDeep,
    findIndex,
    isUndefined,
  },
})
