<template>
  <div>
    <section class="bg-primary py-16">
      <v-container>
        <h1 class="text-h2 text-center text-white font-weight-bold">Contact</h1>
      </v-container>
    </section>
    
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" md="6" class="pr-md-8">
          <h2 class="text-h4 mb-6 font-weight-bold">Contactez-nous</h2>
          <p class="text-body-1 mb-6">
            Vous avez des questions sur nos services d'audit énergétique ? 
            N'hésitez pas à nous contacter par téléphone, email ou en remplissant le formulaire ci-contre.
          </p>
          
          <v-card class="pa-4 mb-6 bg-grey-lighten-4" flat>
            <div class="d-flex align-center mb-4">
              <v-icon size="24" color="primary" class="mr-3">mdi-map-marker</v-icon>
              <div>
                <h3 class="text-subtitle-1 font-weight-bold mb-1">Adresse</h3>
                <p class="mb-0">123 Rue de l'Énergie, 75000 Paris</p>
              </div>
            </div>
            
            <div class="d-flex align-center mb-4">
              <v-icon size="24" color="primary" class="mr-3">mdi-phone</v-icon>
              <div>
                <h3 class="text-subtitle-1 font-weight-bold mb-1">Téléphone</h3>
                <p class="mb-0">01 23 45 67 89</p>
              </div>
            </div>
            
            <div class="d-flex align-center">
              <v-icon size="24" color="primary" class="mr-3">mdi-email</v-icon>
              <div>
                <h3 class="text-subtitle-1 font-weight-bold mb-1">Email</h3>
                <p class="mb-0">contact@auditpro.fr</p>
              </div>
            </div>
          </v-card>
          
          <div>
            <h3 class="text-h6 mb-4 font-weight-bold">Nos horaires d'ouverture</h3>
            <p class="mb-1"><strong>Lundi - Vendredi:</strong> 9h00 - 18h00</p>
            <p><strong>Samedi:</strong> 9h00 - 12h00</p>
          </div>
          
          <v-card flat class="mt-8 pa-4 bg-grey-lighten-4">
            <div class="d-flex align-center">
              <v-icon color="secondary" size="36" class="mr-3">mdi-calculator</v-icon>
              <div>
                <h3 class="text-h6 font-weight-bold mb-1">Besoin d'un devis ?</h3>
                <p class="mb-3">Pour obtenir un devis personnalisé, utilisez notre outil de devis en ligne.</p>
                <v-btn color="secondary" to="/devis" class="rounded-pill">
                  Demander un devis
                  <v-icon right>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="pa-6 rounded-lg">
            <h2 class="text-h5 mb-4 font-weight-bold">Envoyez-nous un message</h2>
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.firstName"
                    :rules="nameRules"
                    label="Prénom"
                    required
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.lastName"
                    :rules="nameRules"
                    label="Nom"
                    required
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="Email"
                    required
                    outlined
                    dense
                    type="email"
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.subject"
                    :rules="requiredRules"
                    label="Sujet"
                    required
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    :rules="requiredRules"
                    label="Message"
                    required
                    outlined
                    dense
                    rows="5"
                  ></v-textarea>
                </v-col>
              </v-row>
              
              <v-alert v-if="messageSent" type="success" class="mb-4">
                Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </v-alert>
              
              <div class="text-right">
                <v-btn
                  color="primary"
                  :loading="loading"
                  :disabled="!valid"
                  @click="submitForm"
                  size="large"
                  class="rounded-pill"
                >
                  Envoyer le message
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      valid: false,
      loading: false,
      messageSent: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      },
      nameRules: [
        v => !!v || 'Ce champ est requis',
        v => v.length >= 2 || 'Minimum 2 caractères'
      ],
      emailRules: [
        v => !!v || 'E-mail est requis',
        v => /.+@.+\..+/.test(v) || 'E-mail doit être valide'
      ],
      requiredRules: [
        v => !!v || 'Ce champ est requis'
      ]
    }
  },
  methods: {
    async submitForm() {
      if (this.$refs.form.validate()) {
        this.loading = true
        
        // Simulation d'envoi de message
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        this.messageSent = true
        this.loading = false
        
        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
          this.$refs.form.reset()
          this.messageSent = false
        }, 5000)
      }
    }
  }
}
</script>
