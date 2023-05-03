<template>
  <q-btn
    v-bind="$attrs"
    :aria-label="label"
    :target="target"
  >
    <q-avatar :size="size">
      <q-tooltip>{{ label }}</q-tooltip>
      <img :src="image">
    </q-avatar>
  </q-btn>
</template>

<script>

export default {
  props: {
    image: {
      type: String,
      required: false,
      default: null
    },
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
