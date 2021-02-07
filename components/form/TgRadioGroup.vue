<template>
  <fieldset>
    <legend class="text-sm font-medium text-gray-900"><slot></slot></legend>
    <div class="mt-2 space-y-5">
      <div
        v-for="(item, index) in items"
        :key="`${name}-radio-${index}`"
        class="relative flex items-start"
      >
        <div class="relative flex items-start">
          <div class="absolute flex items-center h-5">
            <input
              :id="`${name}-radio-${index}`"
              :name="name"
              :value="value"
              aria-describedby="privacy_private-to-project_description"
              type="radio"
              class="focus:ring-purple-500 h-4 w-4 border text-purple-600 border-gray-300"
            />
          </div>
          <div class="pl-7 text-sm">
            <label
              for="`${name}-radio-${index}`"
              class="font-medium text-gray-900"
            >
              {{ item.name }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  name: 'TgRadioGroup',
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
}
</script>
