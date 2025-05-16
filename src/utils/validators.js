/**
 * Validateurs réutilisables pour les formulaires
 */

// Validation nom
export const nameRules = [
  v => !!v || 'Ce champ est requis',
  v => v.length >= 2 || 'Minimum 2 caractères'
]

// Validation email
export const emailRules = [
  v => !!v || 'E-mail est requis',
  v => /.+@.+\..+/.test(v) || 'E-mail doit être valide'
]

// Validation téléphone
export const phoneRules = [
  v => !!v || 'Téléphone est requis',
  v => /^[0-9\s\-+()]{10,15}$/.test(v) || 'Téléphone doit être valide'
]

// Validation champ requis
export const requiredRules = [
  v => !!v || 'Ce champ est requis'
]
