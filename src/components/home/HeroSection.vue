<template>
  <section class="hero-section">
    <v-container class="h-100 d-flex flex-column justify-center">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="text-h2 font-weight-bold text-white mb-4">
            Optimisez votre énergie, maîtrisez vos coûts
          </h1>
          <p class="text-h5 text-white mb-8">
            Découvrez comment nos services d'audit énergétique peuvent transformer 
            votre consommation d'énergie et réduire votre empreinte carbone.
          </p>
          <div>
            <v-btn 
              size="x-large" 
              color="secondary" 
              class="mr-4 rounded-pill" 
              elevation="3"
              to="/services"
            >
              Nos services
            </v-btn>
            <v-btn 
              size="x-large" 
              variant="outlined" 
              color="white"
              class="rounded-pill"
              to="/contact"
            >
              Nous contacter
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  height: 80vh;
  background: linear-gradient(135deg, #0078D7, #005a9e);
  display: flex;
  align-items: center;
}
</style>
