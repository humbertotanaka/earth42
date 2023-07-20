<template>
  <q-chip
    :label="label"
    class="truncate-chip-labels"
    color="deep-purple"
    outline
  >
    <q-tooltip>{{ $t(label) }}</q-tooltip>
  </q-chip>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
