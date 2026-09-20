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
        <div v-for="group in teamGroups" :key="group.title" class="team-group mb-5">
          <div class="mb-4">
            <span class="section-kicker">{{ group.title }}</span>
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
