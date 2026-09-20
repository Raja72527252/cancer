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
  color: #000000;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 700;
}

.news-body h3 {
  color: #000000;
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
  color: #000000;
  margin-right: 0.2rem;
}

.news-body p {
  color: var(--color-muted);
}

.news-body a {
  display: inline-flex;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  transition: background 0.25s ease, transform 0.25s ease;
}

.news-body a:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-2px);
}
</style>
