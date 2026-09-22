<script setup>
import { whatWeDoCards } from '../data/siteData'

const overview = [
  'Tulasi Maya Memorial Cancer Relief Foundation is a not-for-profit and non-governmental organization registered in District Administrative Office, Kathmandu, and affiliated with the Social Welfare Council (SWC).',
  'The foundation was established in memory of Late Tulasi Maya, a woman whose life was shaped by resilience, compassion and courage.',
  'Its focus is on cancer awareness, prevention, early detection and support for underserved communities in Nepal.'
]
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/INTRODUCTION-IMAGE-768x469.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">About</li>
          </ol>
        </nav>
        <h1>About the Foundation</h1>
        <p>
          We are committed to reducing the burden of cancer through compassion, awareness, prevention and community care.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="image-frame">
              <img src="/images/INTRODUCTION-IMAGE-768x469.jpg" alt="Foundation members and healthcare outreach" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-box">
              <span class="section-kicker">About TUMAMCARE</span>
              <h2 class="section-title">A mission rooted in human dignity</h2>
              <p class="lead">
                The foundation’s vision is for a good life without cancer and despite cancer. We work towards a future where fewer people develop cancer, more people are diagnosed early and patients receive compassionate guidance and support.
              </p>
              <ul class="check-list">
                <li v-for="item in overview" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section what-we-do-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-kicker">Our focus</span>
          <h2 class="section-title">What We Do</h2>
          <p class="lead mx-auto">
            We turn awareness, prevention and compassionate support into practical action for communities across Nepal.
          </p>
        </div>
        <div class="row g-4">
          <div v-for="item in whatWeDoCards" :key="item.title" class="col-md-6 col-xl-3">
            <article class="about-focus-card surface-card h-100">
              <div class="about-focus-icon">
                <img :src="item.image" :alt="`${item.title} icon`" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <router-link class="about-focus-link" :to="`/what-we-do/${item.title.toLowerCase().replaceAll(' ', '-')}`">
                Explore focus <i class="bi bi-arrow-up-right"></i>
              </router-link>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft-bg">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="content-box h-100">
              <span class="section-kicker">Vision</span>
              <h3>Our vision</h3>
              <p>
                The Foundation’s vision is for a good life without cancer and despite cancer. According to the strategy, “our aim is that as few people as possible get cancer; if they do, as many as possible should benefit from timely care, early diagnosis, peaceful living and improved quality of life.”
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-box h-100">
              <span class="section-kicker">Mission</span>
              <h3>Our mission</h3>
              <p>
                In its strategy until 2030, the mission of the Tulasi Maya Memorial Cancer Relief Foundation Nepal is to beat cancer. The goal is to prevent cancer, bring about early diagnosis, and develop treatment and support systems that protect individuals and families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.check-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  display: grid;
  gap: 0.85rem;
}

.check-list li {
  position: relative;
  padding-left: 1.4rem;
  color: var(--color-text);
}

.check-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #000000;
  font-size: 1.4rem;
  line-height: 1;
}

.what-we-do-section {
  background: #f5faf4;
}

.what-we-do-section .lead {
  max-width: 40rem;
}

.about-focus-card {
  padding: 1.6rem 1.4rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.about-focus-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 42px rgba(33, 20, 20, 0.14);
}

.about-focus-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

.about-focus-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.about-focus-card h3 {
  color: #000000;
  font-size: 1.2rem;
  font-weight: 800;
}

.about-focus-card p {
  color: var(--color-muted);
}

.about-focus-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.6rem 0.9rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 0.82rem;
  font-weight: 800;
}

.about-focus-link:hover {
  background: var(--color-primary-dark);
  color: var(--color-white);
}
</style>
