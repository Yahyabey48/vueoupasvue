<template>
  <v-footer dark padless>
    <v-card flat tile class="primary flex-grow-1">
      <v-container>
        <v-row class="py-4">
          <v-col cols="12" md="4" class="px-4">
            <h3 class="text-h5 font-weight-bold mb-4">AuditPro</h3>
            <p>Experts en audit énergétique pour professionnels et particuliers. Nous vous aidons à optimiser votre consommation d'énergie et à réduire votre impact environnemental.</p>
          </v-col>
          
          <v-col cols="12" md="4" class="px-4">
            <h3 class="text-h6 font-weight-bold mb-4">Liens rapides</h3>
            <v-list dense dark color="transparent">
              <v-list-item v-for="link in links" :key="link.title" :to="link.to" link class="pl-0">
                <template v-slot:prepend>
                  <v-icon small>{{ link.icon }}</v-icon>
                </template>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          
          <v-col cols="12" md="4" class="px-4">
            <h3 class="text-h6 font-weight-bold mb-4">Contact</h3>
            <div class="d-flex mb-3">
              <v-icon class="mr-3">mdi-map-marker</v-icon>
              <div>123 Rue de l'Énergie, 75000 Paris</div>
            </div>
            <div class="d-flex mb-3">
              <v-icon class="mr-3">mdi-phone</v-icon>
              <div>01 23 45 67 89</div>
            </div>
            <div class="d-flex mb-3">
              <v-icon class="mr-3">mdi-email</v-icon>
              <div>contact@auditpro.fr</div>
            </div>
            <div class="mt-4">
              <v-btn icon class="mr-2" color="grey lighten-2">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon class="mr-2" color="grey lighten-2">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="mr-2" color="grey lighten-2">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
        
        <v-divider class="my-4"></v-divider>
        
        <div class="text-center pb-4">
          <span>&copy; {{ new Date().getFullYear() }} AuditPro - Tous droits réservés</span>
        </div>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      links: [
        { title: 'Accueil', to: '/', icon: 'mdi-home' },
        { title: 'Services', to: '/services', icon: 'mdi-clipboard-list' },
        { title: 'Devis', to: '/devis', icon: 'mdi-calculator' },
        { title: 'Contact', to: '/contact', icon: 'mdi-email' },
        { title: 'Mentions légales', to: '/mentions-legales', icon: 'mdi-file-document' }
      ]
    }
  }
}
</script>
