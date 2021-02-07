<template>
  <div>
    <label id="listbox-label" class="block text-sm font-medium text-gray-700">
      <slot></slot>
    </label>
    <div class="mt-1 relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
        @click="isOpen = !isOpen"
      >
        <span v-if="currentIndex >= 0" class="block truncate">
          {{ items[currentIndex].name }}
        </span>
        <span v-else class="block truncate text-gray-400"> Selecciona </span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <!-- Heroicon name: solid/selector -->
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
        >
          <ul
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            class="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <li
              v-for="(item, index) in items"
              :id="`${name}-drop-down-${index}`"
              :key="`${name}-drop-down-${index}`"
              role="option"
              :class="[
                isCurrent(index) ? 'text-white' : '',
                'cursor-default select-none relative py-2 pl-8 pr-4 group hover:bg-purple-600 text-gray-900',
              ]"
              @click="setCurrent(index)"
            >
              <span
                :class="[
                  isCurrent(index) ? 'font-semibold' : 'font-normal',
                  'block truncate group-hover:text-white',
                ]"
                >{{ item.name }}
              </span>
              <span
                v-if="isCurrent(index)"
                class="absolute inset-y-0 left-0 flex items-center pl-1.5"
              >
                <outline-check-icon
                  :class="[
                    isCurrent(index) ? 'text-purple-600' : ' ',
                    'h-5 w-5 group-hover:text-white',
                  ]"
                ></outline-check-icon>
              </span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
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
</template>
<script>
export default {
  name: 'TgDropDown',
  props: {
    name: {
      type: String,
      default: null,
      required: true,
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
      isOpen: false,
      currentIndex: -1,
    }
  },
  watch: {
    currentIndex(val) {
      this.$emit('input', this.items[val])
    },
  },
  methods: {
    isCurrent(index) {
      return this.currentIndex === index
    },
    isInvalid() {
      return this.errors && this.errors.length > 0
    },
    setCurrent(index) {
      this.isOpen = false
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
