<template>
  <div>
    <hero-section />
    <services-section />
    <client-types />
    
    <section class="py-12 bg-primary text-white">
      <v-container class="text-center">
        <h2 class="text-h3 font-weight-bold mb-6">Prêt à optimiser votre consommation énergétique ?</h2>
        <p class="text-h6 mb-8">Contactez-nous dès aujourd'hui pour un audit personnalisé</p>
        <v-btn 
          size="x-large"
          color="white" 
          class="primary--text rounded-pill" 
          to="/devis"
        >
          Demander un devis gratuit
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script>
import HeroSection from '@/components/home/HeroSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import ClientTypes from '@/components/home/ClientTypes.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSection,
    ServicesSection,
    ClientTypes
  }
}
</script>
