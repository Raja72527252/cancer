<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { newsCards } from '../data/siteData'

const route = useRoute()
const item = computed(() => newsCards.find(entry => entry.slug === route.params.slug) || newsCards[0])
</script>

<template>
  <div class="page-shell">
    <section class="article-top">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb article-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/news">News</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ item.title }}</li>
          </ol>
        </nav>
        <div class="article-cover image-frame">
          <img :src="item.image" :alt="item.title" />
        </div>
      </div>
    </section>

    <section class="section article-section">
      <div class="container">
        <article class="article-content content-box">
          <span class="section-kicker">{{ item.category }}</span>
          <h1>{{ item.title }}</h1>
          <div class="article-meta"><i class="bi bi-calendar3"></i> {{ item.date }} <span>•</span> {{ item.readTime }}</div>
          <div class="article-divider"></div>
          <p class="lead">{{ item.excerpt }}</p>
          <p>{{ item.body }}</p>
          <p>
            Community engagement remains central to our mission. Through healthcare education, screening opportunities and local partnerships, we aim to improve health awareness and support timely action for individuals and families.
          </p>
          <router-link class="site-btn" to="/news">Back to News</router-link>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.article-meta {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--color-muted);
  font-size: 0.84rem;
}

.article-top {
  padding: 2rem 0 0;
  background: var(--color-warm-gray);
}

.article-breadcrumb {
  margin-bottom: 1.5rem;
}

.article-breadcrumb .breadcrumb-item a,
.article-breadcrumb .breadcrumb-item.active,
.article-breadcrumb .breadcrumb-item + .breadcrumb-item::before {
  color: #000000;
}

.article-cover {
  height: clamp(280px, 42vw, 560px);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-section {
  padding-top: 0;
}

.article-content {
  max-width: 920px;
  margin: 0 auto;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  padding: clamp(1.5rem, 4vw, 3.5rem);
}

.article-content h1 {
  max-width: 780px;
  margin: 0.25rem 0 1rem;
  color: #000000;
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.045em;
}

.article-divider {
  width: 70px;
  height: 4px;
  margin: 1.5rem 0;
  border-radius: 999px;
  background: var(--color-secondary);
}
</style>
