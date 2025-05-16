<template>
  <v-app-bar app color="primary" dark elevation="4">
    <!-- Logo et nom de l'entreprise (cliquable) -->
    <div class="d-flex align-center" style="cursor: pointer" @click="$router.push('/')">
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="@/assets/images/logo.svg"
        transition="scale-transition"
        width="40"
      />
      <span class="text-h5 font-weight-bold">AuditPro</span>
    </div>
    
    <v-spacer></v-spacer>
    
    <!-- Navigation - version desktop -->
    <div class="d-none d-md-flex">
      <v-btn text to="/" exact>Accueil</v-btn>
      <v-btn text to="/services">Services</v-btn>
      <v-btn text to="/devis">Devis</v-btn>
      <v-btn text to="/contact">Contact</v-btn>
    </div>
    
    <!-- Bouton menu hamburger pour mobile -->
    <v-app-bar-nav-icon 
      class="d-flex d-md-none" 
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    
    <!-- Drawer pour mobile -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
      app
    >
      <v-list>
        <v-list-item to="/" exact>
          <template v-slot:prepend>
            <v-icon>mdi-home</v-icon>
          </template>
          <v-list-item-title>Accueil</v-list-item-title>
        </v-list-item>
        
        <v-list-item to="/services">
          <template v-slot:prepend>
            <v-icon>mdi-clipboard-list</v-icon>
          </template>
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        
        <v-list-item to="/devis">
          <template v-slot:prepend>
            <v-icon>mdi-calculator</v-icon>
          </template>
          <v-list-item-title>Devis</v-list-item-title>
        </v-list-item>
        
        <v-list-item to="/contact">
          <template v-slot:prepend>
            <v-icon>mdi-email</v-icon>
          </template>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      drawer: false
    }
  }
}
</script>
