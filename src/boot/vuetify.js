import { boot } from 'quasar/wrappers'
import { createVuetify } from 'vuetify'

export default boot(({ app }) => {
  app.use(createVuetify({
    components: [],
    directives: [],
    theme: false
  }))
})
