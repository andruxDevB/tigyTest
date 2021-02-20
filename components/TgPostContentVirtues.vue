<template>
  <slider animation="fade">
    <slider-item v-for="virtue in virtues" :key="`virtue-slide-${virtue.id}`">
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
