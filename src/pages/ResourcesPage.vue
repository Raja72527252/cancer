<script setup>
import { resourceCards } from '../data/siteData'
import ResourceCard from '../components/ResourceCard.vue'
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/cancer-education-program.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Resources</li>
          </ol>
        </nav>
        <h1>Resources</h1>
        <p>
          Download educational materials and awareness resources designed to support prevention and informed care.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div v-for="item in resourceCards" :key="item.title" class="col-md-6 col-xl-4">
            <ResourceCard :item="item" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
