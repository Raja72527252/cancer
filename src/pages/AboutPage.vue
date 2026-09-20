<script setup>
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
  color: var(--color-primary);
  font-size: 1.4rem;
  line-height: 1;
}
</style>
