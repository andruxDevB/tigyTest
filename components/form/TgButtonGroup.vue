<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-900">
      <slot> Label </slot>
    </label>
    <div class="mt-1">
      <span class="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          v-for="(item, index) in items"
          :key="`option-${name}-${index}`"
          :class="[
            baseClass,
            activeClass(index),
            isFirst(index) ? firstClass : '-ml-px',
            isLast(index) ? `${lastClass} -ml-px` : '',
          ]"
          @click="setCurrent(index)"
        >
          {{ item.name }}
        </button>
      </span>
      <template v-if="isInvalid">
        <p
          v-for="(error, index) in errors"
          :id="`${name}-error`"
          :key="`${name}-error-message-${index}`"
          class="mt-2 text-sm text-red-600"
        >
          {{ error }}
        </p>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TgButtonGroup',
  props: {
    name: {
      type: String,
      default: null,
    },
    value: {
      type: null,
      default: null,
    },
    items: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Number,
      default: -1,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: this.active,
      baseClass:
        'relative inline-flex items-center px-4 py-2 border text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:bg-purple-200',
      firstClass: 'rounded-l-md',
      lastClass: 'rounded-r-md',
    }
  },
  computed: {
    isValid() {
      return this.error && this.error.length === 0 && this.value
    },
  },
  watch: {
    currentIndex(val) {
      this.$emit('input', this.items[val])
    },
  },
  methods: {
    isFirst(index) {
      return index === 0
    },
    isLast(index) {
      return index + 1 === this.items.length
    },
    isInvalid() {
      return this.errors && this.errors.length > 0
    },
    setCurrent(index) {
      this.currentIndex = index
    },
    activeClass(index) {
      return this.currentIndex === index
        ? 'bg-purple-200 border-purple-500 z-10'
        : 'bg-white border-gray-300'
    },
  },
}
</script>
