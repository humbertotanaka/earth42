<template>
  <q-header
    :class="bgColor"
    elevated
    reveal
  >
    <q-toolbar class="header-toolbar q-gutter-x-sm">
      <ComponentButtonIcon
        v-if="showDrawerButton"
        :class="textColor"
        :label="$t('Navigation drawer')"
        dense
        icon="fa-solid fa-bars"
        @click="toggleNavigationDrawer"
      />

      <q-toolbar-title>
        <TheHeaderTitle />
      </q-toolbar-title>
      <TheLanguageCombobox
        v-if="!isMobile"
      />
      <TheThemeButton
        v-if="!isMobile"
        class="q-mr-xl"
      />

      <TheButtonGithub
        v-if="!isMobile"
        :class="textColor"
        class="q-ml-xl"
      />
      <TheButtonLinkedIn
        v-if="!isMobile"
        :class="textColor"
      />

      <ComponentButtonIcon
        v-if="isMobile && showDrawerButton"
        :class="textColor"
        :label="$t('Right navigation drawer')"
        dense
        icon="more_vert"
        @click="toggleRightNavigationDrawer"
      />
    </q-toolbar>
  </q-header>
</template>

<script>

import { useQuasar } from 'quasar'
import { computed } from 'vue'

import ComponentButtonIcon from '@/components/base/ComponentButtonIcon.vue'
import TheButtonGithub from '@/components/base/TheButtonGithub.vue'
import TheButtonLinkedIn from '@/components/base/TheButtonLinkedIn.vue'
import TheHeaderTitle from '@/components/base/TheHeaderTitle.vue'
import TheLanguageCombobox from '@/components/base/TheLanguageCombobox.vue'
import TheThemeButton from '@/components/base/TheThemeButton.vue'

import { useStore } from 'stores/system'

import { Links } from '@/util/definitions'

export default {
  components: {
    ComponentButtonIcon,
    TheButtonGithub,
    TheButtonLinkedIn,
    TheHeaderTitle,
    TheLanguageCombobox,
    TheThemeButton
},
  props: {
    showDrawerButton: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup () {

    const $q = useQuasar()
    const store = useStore()

    const bgColor = computed(() => $q.dark.isActive ? 'bg-dark' : 'bg-white')
    const textColor = computed(() => $q.dark.isActive ? 'text-white' : 'text-dark')

    const toggleNavigationDrawer = () => {
      store.showMenu = !store.showMenu
    }

    const toggleRightNavigationDrawer = () => {
      store.showRightMenu = !store.showRightMenu
    }

    return {
      bgColor,
      isMobile: $q.platform.is.mobile,
      Links,
      textColor,
      toggleNavigationDrawer,
      toggleRightNavigationDrawer
    }
  }
}
</script>

<style scoped>
:deep(.header-toolbar) {
  min-height: 60px;
}
</style>
