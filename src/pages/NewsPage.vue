<script setup>
import { newsCards } from '../data/siteData'
import NewsCard from '../components/NewsCard.vue'
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/IMG_2482-scaled.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">News</li>
          </ol>
        </nav>
        <h1>News & Updates</h1>
        <p>
          Community stories, media updates and important developments from the foundation’s work.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="news-intro surface-card mb-4">
          <div>
            <span class="section-kicker">Latest from Tumamcare</span>
            <h2 class="section-title mb-0">News that keeps communities informed</h2>
          </div>
          <p>Follow program milestones, awareness activities and partnerships that support healthier communities.</p>
        </div>

        <div class="row g-4">
          <div v-for="item in newsCards" :key="item.slug" class="col-lg-4">
            <NewsCard :item="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-intro {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.6rem 1.8rem;
  border-left: 5px solid var(--color-secondary);
  background: linear-gradient(135deg, #fff, #f9eeee);
}

.news-intro p {
  max-width: 28rem;
  margin: 0;
  color: var(--color-muted);
}

@media (max-width: 767px) {
  .news-intro {
    display: block;
  }

  .news-intro p {
    margin-top: 1rem;
  }
}
</style>
