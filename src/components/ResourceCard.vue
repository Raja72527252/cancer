<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="resource-card surface-card h-100">
    <div class="resource-icon">
      <i :class="item.icon"></i>
    </div>
    <div class="resource-body">
      <span class="resource-type">{{ item.type }}</span>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <router-link class="download-link" :to="`/resources/${item.slug}`">
        <i class="bi bi-arrow-up-right me-2"></i>Read resource
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.resource-card {
  padding: 1.3rem;
  transition: transform 0.25s ease;
}

.resource-card:hover {
  transform: translateY(-4px);
}

.resource-icon {
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: rgba(87, 174, 79, 0.12);
  color: var(--color-primary);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.resource-type {
  display: inline-block;
  color: #000000;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.resource-body h3 {
  margin: 0.5rem 0 0.6rem;
  color: #000000;
  font-size: 1.2rem;
  font-weight: 800;
}

.resource-body p {
  color: var(--color-muted);
  margin-bottom: 1rem;
}

.download-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 700;
  transition: background 0.25s ease, transform 0.25s ease;
}

.download-link:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-2px);
}
</style>
