<script setup>
import { whatWeDoCards } from '../data/siteData'
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/cancer-education-program.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">What We Do</li>
          </ol>
        </nav>
        <h1>What We Do</h1>
        <p>
          We address cancer prevention, community awareness, screening and support through outreach and action.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div v-for="item in whatWeDoCards" :key="item.title" class="col-md-6 col-xl-3">
            <div class="service-card surface-card h-100">
              <div class="service-icon"><i :class="item.icon"></i></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <router-link class="service-link" :to="`/what-we-do/${item.title.toLowerCase().replaceAll(' ', '-')}`">Explore focus <i class="bi bi-arrow-up-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-card {
  padding: 1.8rem 1.4rem;
}

.service-icon {
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

.service-card h3 {
  color: var(--color-primary-dark);
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  font-weight: 800;
}

.service-card p {
  color: var(--color-muted);
  margin-bottom: 1rem;
}

.service-link {
  color: var(--color-primary);
  font-size: 0.82rem;
  font-weight: 800;
}
</style>
