<template>
  <v-app>
    <app-header />
    
    <v-main>
      <router-view />
    </v-main>
    
    <app-footer />
  </v-app>
</template>
<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
