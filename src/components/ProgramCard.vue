<script setup>
const props = defineProps({
  program: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="program-card surface-card h-100">
    <div class="program-image image-frame">
      <img :src="program.image" :alt="program.title" />
    </div>
    <div class="program-body">
      <h3>{{ program.title }}</h3>
      <p>{{ program.shortDescription }}</p>
      <router-link class="btn btn-outline-primary" :to="`/programs/${program.id}`">Learn more</router-link>
    </div>
  </div>
</template>

<style scoped>
.program-card {
  overflow: hidden;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  border: 1px solid rgba(87, 174, 79, 0.14);
}

.program-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 44px rgba(38, 24, 19, 0.16);
}

.program-image {
  height: 250px;
}

.program-image::after {
  position: absolute;
  inset: auto 0 0;
  height: 35%;
  background: linear-gradient(transparent, rgba(17, 54, 20, 0.18));
  content: '';
  pointer-events: none;
}

.program-body {
  padding: 1.5rem;
}

.program-body h3 {
  color: #000000;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 0.8rem;
}

.program-body p {
  color: var(--color-muted);
  margin-bottom: 1.2rem;
}
</style>
