<script setup>
import { programCards } from '../data/siteData'
import ProgramCard from '../components/ProgramCard.vue'
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/e60c507e-bdeb-40ad-974f-d14e6561fb9f-e1687192809668-768x436.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Programs</li>
          </ol>
        </nav>
        <h1>Programs</h1>
        <p>
          We run targeted cancer awareness and prevention programs focused on the most vulnerable communities.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div v-for="program in programCards" :key="program.id" class="col-lg-4">
            <ProgramCard :program="program" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
