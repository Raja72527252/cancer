<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: '/news'
  }
})
</script>

<template>
  <article class="news-card surface-card h-100">
    <div class="news-image image-frame">
      <img :src="item.image" :alt="item.title" />
    </div>
    <div class="news-body">
      <span class="news-tag">{{ item.category }}</span>
      <div class="news-meta">
        <span><i class="bi bi-calendar3"></i> {{ item.date }}</span>
        <span><i class="bi bi-clock"></i> {{ item.readTime }}</span>
      </div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.excerpt }}</p>
      <router-link :to="`${basePath}/${item.slug}`">Read more</router-link>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 44px rgba(38, 24, 19, 0.16);
}

.news-image {
  height: 230px;
}

.news-image::after {
  position: absolute;
  inset: auto 0 0;
  height: 38%;
  background: linear-gradient(transparent, rgba(17, 54, 20, 0.2));
  content: '';
  pointer-events: none;
}

.news-body {
  padding: 1.35rem 1.35rem 1.55rem;
}

.news-tag {
  display: inline-block;
  background: rgba(87, 174, 79, 0.12);
  color: var(--color-primary);
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 700;
}

.news-body h3 {
  color: var(--color-primary-dark);
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 1rem 0 0.7rem;
}

.news-meta {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: 0.8rem;
  color: var(--color-muted);
  font-size: 0.72rem;
}

.news-meta i {
  color: var(--color-primary);
  margin-right: 0.2rem;
}

.news-body p {
  color: var(--color-muted);
}

.news-body a {
  color: var(--color-primary);
  font-weight: 700;
}
</style>
