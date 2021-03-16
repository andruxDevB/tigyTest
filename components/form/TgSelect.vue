<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700"
      ><slot> Label </slot></label
    >
    <select
      :id="name"
      :value="value"
      :name="name"
      :autocomplete="name"
      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-purple-500 sm:text-sm"
      @input="$emit('input', $event.target.value)"
    >
      <option>- Selecciona -</option>
      <option
        v-for="(item, index) in items"
        :key="`select-option-${name}-${index}`"
        :value="item[valueKey]"
      >
        {{ item[labelKey] }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'TgSelect',
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
    valueKey: {
      type: String,
      default: 'value',
    },
    labelKey: {
      type: String,
      default: 'label',
    },
  },
}
</script>
