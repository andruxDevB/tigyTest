<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-900">
      <slot> Label </slot>
    </label>
    <div class="mt-1 relative">
      <input
        :id="`input-form-${name}`"
        :type="type"
        :name="name"
        :value="value"
        :class="[baseClass, activeClass]"
        :aria-invalid="isInvalid"
        @input="$emit('input', $event.target.value)"
      />
      <transition>
        <div
          v-if="isInvalid"
          class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
        >
          <OutlineExclamationCircleIcon class="h-5 w-5 text-red-500" />
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
  name: 'TgInput',
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
    type: {
      type: String,
      default: 'text',
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      baseClass:
        'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm',
      validClass:
        'border-gray-300 placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500 ',
      invalidClass:
        'border-red-300 text-red-900 placeholder-red-300 pr-10 focus:ring-red-500 focus:border-red-500',
    }
  },
  computed: {
    isInvalid() {
      return this.errors && this.errors.length > 0
    },
    activeClass() {
      return this.isInvalid ? this.invalidClass : this.validClass
    },
  },
}
</script>
