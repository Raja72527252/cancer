<script setup>
import { blogCards } from '../data/siteData'
import NewsCard from '../components/NewsCard.vue'
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image blog-hero" style="--page-hero-image: url('/images/cancer-education-program.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item"><router-link to="/news">News</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
        <span class="page-hero-label">Ideas for healthier communities</span>
        <h1>Blog</h1>
        <p>Practical cancer education, community stories and reflections from Tumamcare.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="blog-heading">
          <div>
            <span class="section-kicker">TUMAMCARE journal</span>
            <h2 class="section-title">Learn. Share. Take action.</h2>
          </div>
          <p>Read accessible guidance and stories about prevention, early detection, screening and support.</p>
        </div>

        <div class="row g-4">
          <div v-for="item in blogCards" :key="item.slug" class="col-md-6">
            <NewsCard :item="item" base-path="/blog" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-hero {
  min-height: 330px;
}

.page-hero-label {
  display: inline-block;
  margin-bottom: 0.8rem;
  color: var(--color-primary);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.blog-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.blog-heading p {
  max-width: 29rem;
  margin: 0;
  color: var(--color-muted);
}

@media (max-width: 767px) {
  .blog-heading {
    display: block;
  }

  .blog-heading p {
    margin-top: 1rem;
  }
}
</style>
