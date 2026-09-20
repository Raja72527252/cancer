<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { programCards, programHighlights } from '../data/siteData'

const route = useRoute()
const program = computed(() => programCards.find(item => item.id === route.params.slug) || programCards[0])
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" :style="{ '--page-hero-image': `url(${program.image})` }">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/programs">Programs</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ program.title }}</li>
          </ol>
        </nav>
        <h1>{{ program.title }}</h1>
        <p>{{ program.shortDescription }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="image-frame">
              <img :src="program.image" :alt="program.title" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-box">
              <span class="section-kicker">Program overview</span>
              <h2 class="section-title">{{ program.title }}</h2>
              <p class="lead">{{ program.description }}</p>

              <ul class="check-list">
                <li v-for="item in programHighlights" :key="item">{{ item }}</li>
              </ul>

              <div class="mt-4">
                <router-link class="site-btn" to="/get-involved">Get Involved</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.image-frame img {
  height: auto;
  max-height: 520px;
  object-fit: contain;
  background: var(--color-white);
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: grid;
  gap: 0.8rem;
}

.check-list li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--color-text);
}

.check-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-size: 1.3rem;
  line-height: 1;
}
</style>
