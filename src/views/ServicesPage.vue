<template>
  <div>
    <section class="bg-primary py-16">
      <v-container>
        <h1 class="text-h2 text-center text-white font-weight-bold">Nos Services</h1>
      </v-container>
    </section>
    
    <v-container class="py-12">
      <v-row>
        <v-col v-for="service in services" :key="service.id" cols="12" class="mb-12">
          <v-card elevation="4" class="rounded-lg overflow-hidden">
            <v-row no-gutters>
              <v-col cols="12" md="5" :order="service.imageRight ? 2 : 1">
                <div 
                  class="service-image" 
                  :style="{ backgroundColor: service.color }"
                >
                  <v-icon size="64" color="white">{{ service.icon }}</v-icon>
                </div>
              </v-col>
              
              <v-col cols="12" md="7" :order="service.imageRight ? 1 : 2">
                <v-card-text class="pa-8">
                  <h2 class="text-h4 mb-4 font-weight-bold primary--text">{{ service.title }}</h2>
                  <p class="text-body-1 mb-4">{{ service.description }}</p>
                  
                  <h3 class="text-h6 mb-2 font-weight-bold">Ce que nous proposons :</h3>
                  <ul class="mb-6">
                    <li v-for="(feature, index) in service.features" :key="index" class="mb-2">
                      {{ feature }}
                    </li>
                  </ul>
                  
                  <v-btn color="primary" size="large" to="/devis" class="rounded-pill">
                    Demander un devis
                  </v-btn>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Diagnostic énergétique',
          description: 'Notre audit énergétique complet analyse votre consommation et identifie les opportunités d\'économie d\'énergie dans vos bâtiments ou installations.',
          features: [
            'Analyse détaillée de la consommation énergétique',
            'Identification des pertes d\'énergie',
            'Thermographie infrarouge pour détecter les fuites',
            'Rapport complet avec données chiffrées',
            'Recommandations hiérarchisées'
          ],
          icon: 'mdi-magnify',
          color: '#0078D7',
          imageRight: false
        },
        {
          id: 2,
          title: 'Optimisation énergétique',
          description: 'Nos experts vous accompagnent dans la mise en œuvre des solutions pour réduire votre consommation et améliorer l\'efficacité énergétique de vos installations.',
          features: [
            'Plan d\'action personnalisé',
            'Accompagnement dans les travaux de rénovation',
            'Optimisation des systèmes de chauffage et climatisation',
            'Solutions d\'éclairage économiques',
            'Suivi et mesure des résultats'
          ],
          icon: 'mdi-chart-line',
          color: '#4CAF50',
          imageRight: true
        },
        {
          id: 3,
          title: 'Certification énergétique',
          description: 'Nous vous aidons à obtenir les certifications réglementaires et à vous conformer aux normes énergétiques en vigueur pour vos bâtiments.',
          features: [
            'Diagnostic de Performance Énergétique (DPE)',
            'Certification HQE (Haute Qualité Environnementale)',
            'Accompagnement pour la RT 2020',
            'Préparation aux audits réglementaires',
            'Veille normative et réglementaire'
          ],
          icon: 'mdi-certificate',
          color: '#FFC107',
          imageRight: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-image {
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
