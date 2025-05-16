<template>
  <section class="py-12 bg-grey-lighten-4">
    <v-container>
      <h2 class="text-h3 text-center font-weight-bold mb-10">Nos services d'audit énergétique</h2>
      
      <v-row>
        <v-col v-for="service in services" :key="service.title" cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              height="100%"
              class="transition-swing"
            >
              <v-card-title class="d-flex align-center">
                <v-icon size="36" color="primary" class="mr-3">{{ service.icon }}</v-icon>
                {{ service.title }}
              </v-card-title>
              <v-card-text class="text-body-1">
                {{ service.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn 
                  color="primary" 
                  variant="text" 
                  to="/services"
                >
                  En savoir plus
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Diagnostic énergétique',
          icon: 'mdi-magnify',
          description: 'Analyse complète de votre consommation énergétique pour identifier les sources d\'inefficacité et de gaspillage.'
        },
        {
          title: 'Optimisation énergétique',
          icon: 'mdi-chart-line',
          description: 'Recommandations personnalisées pour réduire votre consommation et améliorer l\'efficacité de vos installations.'
        },
        {
          title: 'Certification énergétique',
          icon: 'mdi-certificate',
          description: 'Obtention des certifications réglementaires et préparation aux normes en vigueur pour votre bâtiment.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.on-hover {
  transform: translateY(-8px);
}
</style>
