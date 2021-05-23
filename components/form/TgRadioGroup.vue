<template>
  <fieldset>
    <legend class="text-sm font-medium text-gray-900 mb-2">
      <slot></slot>
    </legend>
    <div
      :class="[isInvalid ? 'bg-red-50' : 'bg-white', 'rounded-md -space-y-px']"
    >
      <label
        v-for="(item, index) in items"
        :key="`${name}-radio-${index}`"
        :for="`${name}-radio-${index}`"
        :class="[
          index === 0 ? 'rounded-tl-md rounded-tr-md' : '',
          index === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
          isInvalid ? 'border-red-500' : '',
          isChecked(item)
            ? 'bg-purple-50 border-purple-200 z-10'
            : 'border-gray-200',
          'relative border p-4 flex cursor-pointer',
        ]"
      >
        <input
          :id="`${name}-radio-${index}`"
          v-model="selected"
          type="radio"
          :value="item"
          :checked="isChecked(item)"
          :name="name"
          :class="[
            'h-4 w-4 mt-0.5 cursor-pointer text-purple-600 border-gray-300 focus:ring-purple-500',
          ]"
          aria-labelledby="privacy-setting-0-label"
          aria-describedby="privacy-setting-0-description"
          @change="updateValue(item)"
        />

        <slot name="item" :tiem="item" :isActive="isChecked(item)">
          <form-tg-radio-group-item
            :title="item.descripcion"
            :sub-title="item.definicion"
            :is-active="isChecked(item)"
          ></form-tg-radio-group-item>
        </slot>
      </label>
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
  </fieldset>
</template>
<script>
export default {
  name: 'TgRadioGroup',
  model: {
    event: 'change',
  },
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
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    isInvalid() {
      return this.errors && this.errors.length > 0
    },
  },
  methods: {
    isChecked(item) {
      return item === this.selected
    },
    updateValue(value) {
      this.$emit('change', value)
    },
  },
}
</script>
