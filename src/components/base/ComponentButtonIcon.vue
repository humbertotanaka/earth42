<template>
  <q-btn
    v-bind="$attrs"
    :aria-label="label"
    :size="size"
    :target="target"
    flat
    round
  >
    <q-tooltip>{{ $t(label) }}</q-tooltip>
  </q-btn>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: String,
      required: false,
      default: 'md'
    },
    target: {
      type: String,
      required: false,
      default: '_blank'
    }
  }
}
</script>

<style scoped>
</style>
