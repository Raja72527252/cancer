<script setup>
import { teamGroups } from '../data/siteData'
import TeamCard from '../components/TeamCard.vue'
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/IMG_2482-scaled.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Our Team</li>
          </ol>
        </nav>
        <h1>Our Team</h1>
        <p>
          The foundation is led by a dedicated team of community leaders, health professionals and volunteers.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="team-page-intro surface-card mb-5">
          <div>
            <span class="section-kicker">People behind the mission</span>
            <h2 class="section-title mb-2">A team built around community care</h2>
            <p class="lead mb-0">Our leaders, health professionals and volunteers bring knowledge, empathy and local understanding to every programme.</p>
          </div>
          <i class="bi bi-people-fill" aria-hidden="true"></i>
        </div>
        <div v-for="group in teamGroups" :key="group.title" class="team-group mb-5">
          <div class="team-group-heading mb-4">
            <span class="section-kicker">{{ group.title }}</span>
            <span class="team-group-rule"></span>
          </div>
          <div class="row g-4">
            <div v-for="member in group.members" :key="member.name" class="col-sm-6 col-lg-4 col-xl-3">
              <TeamCard :member="member" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-page-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-color: rgba(87, 174, 79, 0.18);
  background: linear-gradient(135deg, #ffffff 0%, #eaf6e8 100%);
}

.team-page-intro > div {
  max-width: 48rem;
}

.team-page-intro > i {
  flex: 0 0 auto;
  color: var(--color-primary);
  font-size: clamp(3.5rem, 8vw, 6rem);
  opacity: 0.75;
}

.team-group-heading {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.team-group-heading .section-kicker {
  margin-bottom: 0;
}

.team-group-rule {
  height: 1px;
  flex: 1;
  background: rgba(87, 174, 79, 0.24);
}

@media (max-width: 575px) {
  .team-page-intro {
    align-items: flex-start;
  }

  .team-page-intro > i {
    font-size: 3rem;
  }
}
</style>
