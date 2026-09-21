<script setup>
import { computed } from 'vue'

const props = defineProps({
  member: {
    type: Object,
    required: true
  }
})

const avatarImages = [
  '/images/gallery/IMG_6345.jpg',
  '/images/gallery/DSC_5670-2-scaled.jpg',
  '/images/gallery/DSC_5686-1-scaled.jpg',
  '/images/gallery/IMG_2482-scaled.jpg',
  '/images/gallery/DSC_5935-scaled.jpg',
  '/images/gallery/IMG_2577.jpg'
]

const avatarImage = computed(() => {
  const score = [...props.member.name].reduce((total, character) => total + character.charCodeAt(0), 0)
  return avatarImages[score % avatarImages.length]
})
</script>

<template>
  <article class="team-card surface-card h-100">
    <div class="team-card-photo">
      <img :src="avatarImage" :alt="`${member.name} demo avatar`" />
      <span class="team-card-badge"><i class="bi bi-heart-pulse"></i> TUMAMCARE</span>
    </div>
    <div class="team-card-body">
      <span class="team-card-line"></span>
      <h3>{{ member.name }}</h3>
      <p><i class="bi bi-award me-1"></i>{{ member.role }}</p>
      <span class="team-card-caption">Serving with compassion</span>
    </div>
  </article>
</template>

<style scoped>
.team-card {
  overflow: hidden;
  border: 1px solid rgba(87, 174, 79, 0.16);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 42px rgba(46, 111, 42, 0.14);
}

.team-card-photo {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: #e4f2e1;
}

.team-card-photo::after {
  position: absolute;
  inset: auto 0 0;
  height: 45%;
  background: linear-gradient(transparent, rgba(17, 54, 20, 0.58));
  content: '';
}

.team-card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}

.team-card:hover .team-card-photo img {
  transform: scale(1.06);
}

.team-card-badge {
  position: absolute;
  right: 0.8rem;
  bottom: 0.75rem;
  z-index: 1;
  color: var(--color-white);
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.team-card-body {
  position: relative;
  padding: 1.2rem 1.25rem 1.35rem;
}

.team-card-line {
  display: block;
  width: 2.6rem;
  height: 0.22rem;
  margin-bottom: 0.75rem;
  border-radius: 999px;
  background: var(--color-primary);
}

.team-card h3 {
  color: #000000;
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 0.4rem;
}

.team-card p {
  color: var(--color-primary-dark);
  font-size: 0.86rem;
  font-weight: 700;
  margin: 0;
}

.team-card-caption {
  display: block;
  margin-top: 0.55rem;
  color: var(--color-muted);
  font-size: 0.74rem;
}
</style>
