import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#0078D7',   // Bleu
          secondary: '#4CAF50', // Vert
          accent: '#FFC107',    // Jaune
        }
      }
    }
  },
  components,
  directives
})
