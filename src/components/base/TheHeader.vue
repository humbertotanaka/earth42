<template>
  <q-header
    :class="bgColor"
    elevated
    reveal
  >
    <q-toolbar class="header-toolbar q-gutter-x-md">
      <q-btn
        v-if="showDrawerButton"
        :aria-label="$t('Navigation drawer')"
        :class="textColor"
        dense
        flat
        icon="fa-solid fa-bars"
        round
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
      />

      <q-btn
        v-if="isMobile && showDrawerButton"
        :aria-label="$t('Right navigation drawer')"
        :class="textColor"
        dense
        flat
        icon="more_vert"
        round
        @click="toggleRightNavigationDrawer"
      />

      <q-btn
        :class="textColor"
        :href="Links.GITHUB"
        aria-label="Github"
        class="q-ml-xl"
        flat
        icon="fa-brands fa-github"
        round
        target="_blank"
      >
        <q-tooltip>{{ $t('Github') }}</q-tooltip>
      </q-btn>
      <q-btn
        :class="textColor"
        aria-label="LinkedIn"
        flat
        icon="fa-brands fa-linkedin"
        round
        target="_blank"
      >
        <q-tooltip>{{ $t('LinkedIn') }}</q-tooltip>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>

import { useQuasar } from 'quasar'
import { computed } from 'vue'

import TheHeaderTitle from '@/components/base/TheHeaderTitle.vue'
import TheLanguageCombobox from '@/components/base/TheLanguageCombobox.vue'
import TheThemeButton from '@/components/base/TheThemeButton.vue'

import { useStore } from 'stores/system'

import { Links } from '@/util/definitions'

export default {
  components: {
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
