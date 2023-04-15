
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import i18n from '@/i18n'

export const useStore = defineStore('System', {

  state: () => {
    const { locale } = i18n.global

    return {
      darkTheme: useLocalStorage('earth42:darkTheme', false),
      locale: useLocalStorage('earth42:locale', locale),
      showMenu: useLocalStorage('earth42:showMenu', false),
      showRightMenu: useLocalStorage('earth42:showRightMenu', false)
    }
  },

  getters: {
  },

  actions: {
  }

})
