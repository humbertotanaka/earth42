<template>
  <ComponentButtonIcon
    v-bind="$attrs"
    :href="Links.LINKEDIN"
    icon="fa-brands fa-linkedin"
    label="LinkedIn"
  />
</template>

<script>
import ComponentButtonIcon from '@/components/base/ComponentButtonIcon.vue'

import { Links } from '@/util/definitions'

export default {
  components: {
    ComponentButtonIcon
  },
  setup: () => {
    return {
      Links
    }
  }
}
</script>

<style scoped>
</style>
