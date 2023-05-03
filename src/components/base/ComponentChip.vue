<template>
  <q-chip
    color="deep-purple"
    outline
  >
    {{ $t(label) }}
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
