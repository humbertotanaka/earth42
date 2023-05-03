<template>
  <ComponentButtonIcon
    v-bind="$attrs"
    :href="Links.GITHUB"
    icon="fa-brands fa-github"
    label="Github"
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
