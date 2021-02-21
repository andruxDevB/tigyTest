<template>
  <div class="relative z-10" @click="visible = !visible">
    <slot></slot>
    <transition
      enter-active-class="ransition ease-out duration-100"
      leave-active-class="transition ease-in duration-75"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="visible"
        class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 border border-gray-200"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <slot name="items"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'TgMenu',
  data() {
    return {
      visible: false,
    }
  },
}
</script>
