<template>
  <section class="py-12">
    <v-container>
      <h2 class="text-h3 text-center font-weight-bold mb-10">
        Solutions adaptées à vos besoins
      </h2>
      
      <v-row justify="center">
        <v-col cols="12" sm="6" md="5" class="pa-4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 12 : 4"
              :class="{ 'on-hover': isHovering }"
              height="100%"
              class="text-center rounded-lg transition-swing"
              to="/devis?type=professionnel"
            >
              <v-card-title class="text-h4 justify-center py-5">Professionnels</v-card-title>
              <v-card-text class="text-body-1">
                <p>Solutions sur mesure pour vos locaux commerciaux, bureaux et sites industriels.</p>
                <ul class="text-left pa-4 mt-4">
                  <li>Conformité réglementaire</li>
                  <li>Réduction des coûts opérationnels</li>
                  <li>Amélioration de l'image de marque</li>
                </ul>
              </v-card-text>
              <v-card-actions class="justify-center pb-6">
                <v-btn color="primary" size="x-large" class="rounded-pill">
                  Espace pro
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
        
        <v-col cols="12" sm="6" md="5" class="pa-4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 12 : 4"
              :class="{ 'on-hover': isHovering }"
              height="100%"
              class="text-center rounded-lg transition-swing"
              to="/devis?type=particulier"
            >
              <v-card-title class="text-h4 justify-center py-5">Particuliers</v-card-title>
              <v-card-text class="text-body-1">
                <p>Optimisez la performance énergétique de votre habitation et réduisez vos factures.</p>
                <ul class="text-left pa-4 mt-4">
                  <li>Diagnostic de performance énergétique</li>
                  <li>Conseils pour les travaux de rénovation</li>
                  <li>Accompagnement pour les aides financières</li>
                </ul>
              </v-card-text>
              <v-card-actions class="justify-center pb-6">
                <v-btn color="secondary" size="x-large" class="rounded-pill">
                  Espace particulier
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
  name: 'ClientTypes'
}
</script>

<style scoped>
.on-hover {
  transform: translateY(-8px);
}
</style>
