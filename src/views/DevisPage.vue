<template>
  <div>
    <section class="bg-secondary py-16">
      <v-container>
        <h1 class="text-h2 text-center text-white font-weight-bold">Demande de devis</h1>
      </v-container>
    </section>
    
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" lg="10" offset-lg="1">
          <v-card flat class="mb-8 pa-4 text-center bg-grey-lighten-4">
            <h2 class="text-h5 font-weight-bold mb-2">Besoin d'un audit énergétique ?</h2>
            <p class="text-body-1">
              Remplissez notre questionnaire pour obtenir un devis adapté à vos besoins spécifiques.
              Que vous soyez un professionnel ou un particulier, nous vous proposons des solutions sur mesure.
            </p>
          </v-card>
          
          <v-tabs
            v-model="activeTab"
            color="primary"
            align-tabs="center"
            class="mb-6"
          >
            <v-tab value="particulier">Particulier</v-tab>
            <v-tab value="professionnel">Professionnel</v-tab>
          </v-tabs>
          
          <v-window v-model="activeTab">
            <v-window-item value="particulier">
              <contact-form type="particulier" />
            </v-window-item>
            <v-window-item value="professionnel">
              <contact-form type="professionnel" />
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/common/ContactForm.vue'

export default {
  name: 'DevisPage',
  components: {
    ContactForm
  },
  data() {
    return {
      activeTab: this.$route.query.type || 'particulier'
    }
  },
  watch: {
    '$route.query.type'(newType) {
      if (newType && (newType === 'particulier' || newType === 'professionnel')) {
        this.activeTab = newType;
      }
    }
  }
}
</script>
