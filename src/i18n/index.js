import { createI18n } from 'vue-i18n'

import enUS from './en-US'
import ptBR from './pt-BR'

const messages = {
  'en-US': enUS,
  'pt-BR': ptBR
}

const instance = createI18n({
  fallbackLocale: [ 'en-US' ],
  fallbackWarn: false,
  globalInjection: true,
  legacy: false,
  locale: 'en-US',
  messages,
  missingWarn: false
})

export default instance
