<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <tg-profile-id-stats-item title>
        <template #title> Valores</template>
        <div>valores</div>
      </tg-profile-id-stats-item>
      <tg-profile-id-stats-item>
        <template #title> Gratitud</template>
        <div>gratitud</div>
      </tg-profile-id-stats-item>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'TgProfileIdValuesGratitude',
  data() {
    return {}
  },
}
</script>
