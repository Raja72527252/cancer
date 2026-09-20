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
  <div class="team-card surface-card h-100">
    <div class="avatar">
      <img :src="avatarImage" :alt="`${member.name} demo avatar`" />
    </div>
    <h3>{{ member.name }}</h3>
    <p>{{ member.role }}</p>
  </div>
</template>

<style scoped>
.team-card {
  padding: 1.5rem 1.2rem;
  text-align: center;
  transition: transform 0.25s ease;
}

.team-card:hover {
  transform: translateY(-4px);
}

.avatar {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f1d8d3, #e8efe8);
  color: var(--color-primary);
  font-weight: 800;
  font-size: 1.05rem;
  margin: 0 auto 1rem;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(46, 111, 42, 0.18);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.team-card:hover .avatar img {
  transform: scale(1.08);
}

.team-card h3 {
  color: var(--color-primary-dark);
  font-size: 1.08rem;
  font-weight: 800;
  margin-bottom: 0.35rem;
}

.team-card p {
  color: var(--color-muted);
  margin: 0;
}
</style>
