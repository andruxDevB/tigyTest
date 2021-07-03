<template>
  <v-popover trigger="hover">
    <slot> </slot>
    <template slot="popover">
      <ul class="space-y-3">
        <slot name="users"> </slot>
      </ul>
    </template>
  </v-popover>
</template>
<script>
export default {
  name: 'TgUserPopover',
}
</script>
