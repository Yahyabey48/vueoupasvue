<template>
  <v-card class="pa-4 rounded-lg">
    <v-card-title class="text-h5">
      {{ isProClient ? 'Audit énergétique pour professionnels' : 'Audit énergétique pour particuliers' }}
    </v-card-title>
    
    <!-- Loader pour afficher le chargement -->
    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    
    <v-window v-model="step">
      <!-- Étapes du questionnaire -->
      <v-window-item v-for="(question, index) in questions" :key="index" :value="index">
        <v-card-text>
          <p class="text-body-1 mb-4">
            Pour mieux comprendre vos besoins et vous proposer une solution adaptée, 
            merci de répondre à ces quelques questions.
          </p>
          
          <!-- Question actuelle -->
          <v-card class="mb-4 pa-4 bg-grey-lighten-5">
            <p class="text-h6 font-weight-bold">{{ question.question }}</p>
            <p v-if="question.description" class="text-body-2 mb-4">{{ question.description }}</p>
            
            <!-- Options pour la question actuelle -->
            <v-radio-group v-model="answers[index]" class="mt-2" :rules="[v => !!v || 'Veuillez sélectionner une option']">
              <v-radio
                v-for="option in question.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
                color="primary"
              ></v-radio>
            </v-radio-group>
          </v-card>
          
          <!-- Indicateur de progression -->
          <div class="mb-4">
            <p class="text-body-2 text-grey">
              Étape {{ index + 1 }} sur {{ questions.length }}
            </p>
            <v-progress-linear
              color="primary"
              :model-value="((index + 1) / questions.length) * 100"
              height="8"
              rounded
            ></v-progress-linear>
          </div>
        </v-card-text>
        
        <v-card-actions>
          <v-btn
            v-if="index > 0"
            text
            @click="step--"
          >
            <v-icon left>mdi-arrow-left</v-icon>
            Précédent
          </v-btn>
          
          <v-spacer></v-spacer>
          
          <v-btn
            color="primary"
            @click="nextStep"
            :disabled="!answers[index]"
          >
            {{ index === questions.length - 1 ? 'Finaliser' : 'Suivant' }}
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-window-item>
      
      <!-- Étape finale: Formulaire de contact complet -->
      <v-window-item :value="questions.length">
        <v-card-text>
          <v-alert v-if="formSubmitted" type="success" variant="tonal">
            <p class="text-h6 font-weight-bold">Votre demande a été envoyée avec succès !</p>
            <p>Nous vous contacterons dans les plus brefs délais pour discuter de votre projet d'audit énergétique.</p>
            <div class="text-right mt-2">
              <v-btn color="primary" @click="resetForm">Nouvelle demande</v-btn>
            </div>
          </v-alert>
          
          <div v-if="!formSubmitted">
            <p class="text-body-1 mb-4">
              Merci pour vos réponses ! Veuillez compléter vos informations de contact pour que nous puissions vous proposer une solution adaptée.
            </p>
            
            <!-- Résumé des réponses -->
            <v-card class="mb-6 pa-4 bg-grey-lighten-5">
              <p class="text-h6 font-weight-bold mb-3">Récapitulatif de vos besoins</p>
              <v-list dense>
                <v-list-item v-for="(answer, index) in answersDisplay" :key="index">
                  <template v-slot:prepend>
                    <v-icon color="primary" class="mr-3">mdi-check-circle</v-icon>
                  </template>
                  <v-list-item-title>{{ answer }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
            
            <!-- Formulaire final -->
            <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
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
                <v-col cols="12" sm="6">
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
                
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.phone"
                    :rules="phoneRules"
                    label="Téléphone"
                    required
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              
              <v-row v-if="isProClient">
                <v-col cols="12">
                  <v-text-field
                    v-model="form.company"
                    :rules="requiredRules"
                    label="Nom de l'entreprise"
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
                    label="Informations complémentaires (facultatif)"
                    outlined
                    dense
                    rows="3"
                  ></v-textarea>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col cols="12">
                  <v-checkbox
                    v-model="form.terms"
                    :rules="[v => !!v || 'Vous devez accepter les conditions']"
                    label="J'accepte les conditions d'utilisation et la politique de confidentialité"
                    required
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-card-text>
        
        <v-card-actions v-if="!formSubmitted">
          <v-btn
            text
            @click="step = questions.length - 1"
            class="mr-auto"
          >
            <v-icon left>mdi-arrow-left</v-icon>
            Modifier mes réponses
          </v-btn>
          
          <v-spacer></v-spacer>
          
          <v-btn
            color="primary"
            :loading="loading"
            :disabled="!valid"
            @click="submitForm"
            size="large"
          >
            Envoyer ma demande
          </v-btn>
        </v-card-actions>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import { nameRules, emailRules, phoneRules, requiredRules } from '@/utils/validators'

export default {
  name: 'ContactForm',
  props: {
    type: {
      type: String,
      default: 'particulier'
    }
  },
  data() {
    return {
      // Étape actuelle du formulaire (commence à 0)
      step: 0,
      
      // Réponses au questionnaire
      answers: {},
      
      // Questions pour particuliers
      particularQuestions: [
        {
          question: "Quel type de logement souhaitez-vous faire auditer ?",
          options: [
            { label: "Maison individuelle", value: "maison" },
            { label: "Appartement", value: "appartement" },
            { label: "Immeuble entier", value: "immeuble" }
          ]
        },
        {
          question: "Quelle est la surface approximative de votre logement ?",
          options: [
            { label: "Moins de 50 m²", value: "petit" },
            { label: "Entre 50 et 100 m²", value: "moyen" },
            { label: "Entre 100 et 200 m²", value: "grand" },
            { label: "Plus de 200 m²", value: "tres_grand" }
          ]
        },
        {
          question: "Quel est votre objectif principal ?",
          options: [
            { label: "Réduire mes factures d'énergie", value: "economie" },
            { label: "Rénover mon logement", value: "renovation" },
            { label: "Obtenir un diagnostic de performance énergétique (DPE)", value: "dpe" },
            { label: "Préparer la vente de mon bien", value: "vente" }
          ]
        },
        {
          question: "Quand souhaiteriez-vous réaliser cet audit ?",
          options: [
            { label: "Dès que possible", value: "urgent" },
            { label: "Dans les 3 mois", value: "moyen_terme" },
            { label: "Dans plus de 3 mois", value: "long_terme" },
            { label: "Je me renseigne simplement", value: "information" }
          ]
        }
      ],
      
      // Questions pour professionnels
      professionalQuestions: [
        {
          question: "Quel type de bâtiment souhaitez-vous faire auditer ?",
          options: [
            { label: "Bureaux", value: "bureaux" },
            { label: "Commerce", value: "commerce" },
            { label: "Bâtiment industriel", value: "industriel" },
            { label: "Immeuble de logements", value: "logements" },
            { label: "Autre", value: "autre" }
          ]
        },
        {
          question: "Quelle est la surface approximative du bâtiment ?",
          options: [
            { label: "Moins de 500 m²", value: "petit" },
            { label: "Entre 500 et 2000 m²", value: "moyen" },
            { label: "Entre 2000 et 5000 m²", value: "grand" },
            { label: "Plus de 5000 m²", value: "tres_grand" }
          ]
        },
        {
          question: "Quel est votre objectif principal ?",
          options: [
            { label: "Conformité réglementaire", value: "conformite" },
            { label: "Réduction des coûts d'exploitation", value: "reduction_couts" },
            { label: "Amélioration de l'image de marque", value: "image" },
            { label: "Certification environnementale", value: "certification" }
          ]
        },
        {
          question: "Quand souhaiteriez-vous réaliser cet audit ?",
          options: [
            { label: "Dès que possible", value: "urgent" },
            { label: "Dans les 3 mois", value: "moyen_terme" },
            { label: "Dans plus de 3 mois", value: "long_terme" },
            { label: "Je me renseigne simplement", value: "information" }
          ]
        }
      ],
      
      // Formulaire final
      valid: false,
      loading: false,
      formSubmitted: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        terms: false
      },
      
      // Règles de validation (importées depuis utils/validators.js)
      nameRules,
      emailRules,
      phoneRules,
      requiredRules
    }
  },
  computed: {
    isProClient() {
      return this.type === 'professionnel'
    },
    questions() {
      return this.isProClient ? this.professionalQuestions : this.particularQuestions
    },
    // Pour afficher les réponses de manière compréhensible
    answersDisplay() {
      const result = []
      
      for (let i = 0; i < this.questions.length; i++) {
        const question = this.questions[i]
        const answer = this.answers[i]
        
        if (answer) {
          const option = question.options.find(opt => opt.value === answer)
          if (option) {
            result.push(`${question.question} ${option.label}`)
          }
        }
      }
      
      return result
    }
  },
  methods: {
    nextStep() {
      if (this.step < this.questions.length) {
        this.step++
      }
    },
    resetForm() {
      this.step = 0
      this.answers = {}
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        terms: false
      }
      this.formSubmitted = false
      if (this.$refs.form) {
        this.$refs.form.reset()
      }
    },
    async submitForm() {
      if (this.$refs.form.validate()) {
        this.loading = true
        
        // Préparer les données à envoyer (incluant les réponses au questionnaire)
        const formData = {
          ...this.form,
          answers: this.answers,
          clientType: this.isProClient ? 'professionnel' : 'particulier'
        }
        
        console.log('Données à envoyer:', formData)
        
        // Simulation d'un appel API
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        this.formSubmitted = true
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.v-radio-group .v-radio {
  margin-bottom: 8px;
}
</style>
