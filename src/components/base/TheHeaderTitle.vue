<template>
  <div class="header-title row items-center text-primary">
    <q-icon
      :name="model.icon"
      class="q-mb-xs q-mr-sm"
      size="xs"
      start
    />
    {{ $t(model.title) }}
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {

    const route = useRoute()

    const model = computed(() => {
      return {
        icon: route?.meta?.icon || 'Icon',
        title: route?.meta?.title || 'Title'
      }
    })

    return {
      model
    }

  }
}
</script>

<style scoped>
.header-title {
  display: inline-block;
  font-family: inherit !important;
  font-weight: 600;
}
</style>
