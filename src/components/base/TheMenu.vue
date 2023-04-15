<template>
  <v-list
    density="comfortable"
    nav
  >
    <template
      v-for="item in menu"
      :key="item.meta.id"
    >
      <TheMenuListItem
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
import { VList } from 'vuetify/components/VList'

import TheMenuListItem from '@/components/base/TheMenuListItem.vue'

import routes from '@/router/routes'

export default {
  components: {
    TheMenuListItem,
    VList
  },
  setup () {

    const cascadeChildren = (root) => {
      if (root.children?.length > 0) {
        root.children = root.children.reduce((selected, child) => {
          if (child.meta?.id) {
            selected.push(...cascadeChildren(child))
          }
          return selected
        }, [])
      }
      return root.meta?.id ? [ root ] : (root.children || [])
    }

    const menu = routes.reduce((selected, item) => {
      selected.push(...cascadeChildren(item))
      return selected
    }, [])
    console.log('menu', menu)

    return {
      menu
    }

  }
}
</script>

<style scoped>
:deep(.v-list-item) {
  padding-left: 20px;
}

:deep(.v-list-item) {
  min-height: 50px;
}

:deep(.v-list-item--active .v-list-item__overlay) {
  opacity: 0.4;
}

:deep(.v-list-item:hover .v-list-item__overlay) {
  opacity: 0.2;
}

:deep(.v-ripple__container) {
  opacity: 0.2;
}
</style>
