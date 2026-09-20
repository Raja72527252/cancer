<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>
