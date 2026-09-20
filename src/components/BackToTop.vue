<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

const toggleVisibility = () => {
  visible.value = window.scrollY > 360
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  toggleVisibility()
  window.addEventListener('scroll', toggleVisibility)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
  <button v-show="visible" class="back-to-top" aria-label="Back to top" @click="scrollToTop">
    <i class="bi bi-arrow-up"></i>
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), #7a1d39);
  color: var(--color-white);
  box-shadow: 0 12px 28px rgba(46, 111, 42, 0.3);
  z-index: 1400;
  display: grid;
  place-items: center;
}
</style>
