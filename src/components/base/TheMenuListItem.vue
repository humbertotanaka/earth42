<template>
  <v-list-group
    v-if="item.children?.length > 0"
  >
    <template #activator="{ props }">
      <v-list-item
        v-bind="props"
        :prepend-icon="item.meta.icon"
        :title="$t(item.meta.title)"
        :value="item.meta.path"
      />
    </template>
    <template
      v-for="child in item.children"
      :key="child.meta.path"
    >
      <TheMenuListItem
        :item="child"
      />
    </template>
  </v-list-group>
  <v-list-item
    v-else
    :prepend-icon="item.meta.icon"
    :title="$t(item.meta.title)"
    :to="item.meta.path"
    :value="item.meta.path"
  />
</template>

<script>
/* eslint-disable-next-line */
import TheMenuListItem from './TheMenuListItem.vue'
import { VListGroup, VListItem } from 'vuetify/components/VList'

export default {
  components: {
    VListGroup,
    VListItem
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
        return {
          children: []
        }
      }
    }
  }
}
</script>

<style scoped>
:deep(.v-list-item-title) {
  font-weight: 600;
  isolation: isolate;
}

:deep(.fa-solid.mdi::before) {
  font-family: inherit;
  font-weight: inherit;
}
</style>
