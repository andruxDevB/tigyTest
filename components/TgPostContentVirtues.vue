<template>
  <slider animation="fade" class="z-10">
    <slider-item
      v-for="(virtue, index) in virtues"
      :key="`virtue-slide-${virtue.id}-${index}`"
    >
      <div class="relative h-full">
        <h2 class="text-white absolute top-4 left-4 text-4xl">
          {{ virtue.descripcion }}
        </h2>
        <img class="object-cover" :src="virtue.image" />
      </div>
    </slider-item>
  </slider>
</template>
<script>
export default {
  name: 'TgPostContentVirtues',
  props: {
    virtues: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
