<script setup>
import { homeServices, programCards, whatWeDoCards, resourceCards, newsCards, teamGroups } from '../data/siteData'
import ProgramCard from '../components/ProgramCard.vue'
import NewsCard from '../components/NewsCard.vue'
import ResourceCard from '../components/ResourceCard.vue'
import TeamCard from '../components/TeamCard.vue'

const teamPreview = teamGroups.flatMap(group => group.members.slice(0, 3)).slice(0, 6)
</script>

<template>
  <div class="home-page">
    <section class="hero-section" style="--hero-image: url('/images/cancer-education-program.jpg')">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="row align-items-center gy-4">
          <div class="col-lg-7">
            <div class="hero-copy">
              <span class="hero-eyebrow"><i class="bi bi-heart-pulse"></i> Compassion in action</span>
              <h1>Working towards a <em>life without cancer.</em></h1>
              <p>
                Tulasi Maya Memorial Cancer Relief Foundation is committed to cancer awareness, prevention,
                early detection and compassionate support for communities in Nepal.
              </p>
              <div class="hero-actions d-flex flex-wrap gap-3">
                <router-link class="site-btn" to="/donate">Donate</router-link>
                <router-link class="btn btn-outline-light" to="/programs">Our Programs</router-link>
                <router-link class="btn btn-outline-light" to="/get-involved">Get Involved</router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="hero-visual">
              <div class="hero-image-wrap">
                <img src="/images/IMG_2577.jpg" alt="Cancer awareness and community outreach" />
              </div>
              <div class="hero-badge hero-badge-top"><i class="bi bi-shield-check"></i><span>Prevention<br /><strong>through care</strong></span></div>
              <div class="hero-badge hero-badge-bottom"><strong>100%</strong><span>community<br />focused</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-sm impact-strip">
      <div class="container">
        <div class="row g-4">
          <div v-for="item in homeServices" :key="item.title" class="col-md-6 col-xl-4">
            <div class="impact-card service-highlight surface-card h-100">
              <div class="impact-icon"><i :class="item.icon"></i></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-section reveal-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="image-grid">
              <img src="/images/INTRODUCTION-IMAGE-768x469.jpg" alt="Community care and cancer awareness" />
            </div>
          </div>
          <div class="col-lg-6">
            <span class="section-kicker">About TUMAMCARE</span>
            <h2 class="section-title">A foundation rooted in compassion and action</h2>
            <p class="lead">
              Tulasi Maya Memorial Cancer Relief Foundation is a not-for-profit, non-governmental organization
              registered in the District Administrative Office, Kathmandu, and affiliated with the Social Welfare
              Council (SWC). The foundation was established in honor of Late Tulasi Maya, a woman who inspired
              hope and compassion through life.
            </p>
            <div class="about-points">
              <div>
                <strong>Vision</strong>
                <p>A good life without cancer and despite cancer, where fewer people suffer from preventable disease.</p>
              </div>
              <div>
                <strong>Mission</strong>
                <p>To beat cancer through prevention, early diagnosis, awareness and community support.</p>
              </div>
            </div>
            <router-link class="site-btn" to="/about">Read More</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft-bg reveal-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-kicker">What we do</span>
          <h2 class="section-title">Driving prevention, screening and support</h2>
        </div>

        <div class="row g-4">
          <div v-for="item in whatWeDoCards" :key="item.title" class="col-md-6 col-xl-3">
            <div class="service-card surface-card h-100">
              <div class="service-icon"><i :class="item.icon"></i></div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <router-link class="service-link" :to="`/what-we-do/${item.title.toLowerCase().replaceAll(' ', '-')}`">
                Learn More <i class="bi bi-arrow-up-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section reveal-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-kicker">Current programs</span>
          <h2 class="section-title">Community-focused cancer care programs</h2>
        </div>

        <div class="row g-4">
          <div v-for="program in programCards" :key="program.id" class="col-lg-4">
            <ProgramCard :program="program" />
          </div>
        </div>
      </div>
    </section>

    <section class="section soft-bg reveal-section">
      <div class="container">
        <div class="featured-panel surface-card">
          <div class="row g-0 align-items-center">
            <div class="col-lg-6">
              <div class="featured-image image-frame">
                <img src="/images/IMG_2577.jpg" alt="Breast cancer screening awareness" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="featured-copy">
                <span class="section-kicker">Featured program</span>
                <h2>Breast Cancer Screening & Awareness Program</h2>
                <p>
                  The foundation runs breast cancer screening and awareness outreach for poor and needy women,
                  helping communities access timely information and support.
                </p>
                <ul>
                  <li>Targeted awareness and education outreach</li>
                  <li>Screening support for underserved women</li>
                  <li>Referral and behavioural health guidance</li>
                </ul>
                <router-link class="site-btn" to="/programs/breast-cancer">Learn More</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section reveal-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-kicker">Why support us</span>
          <h2 class="section-title">Together, we can make a difference</h2>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-xl-3">
            <div class="support-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-broadcast"></i></div>
              <h3>Awareness</h3>
              <p>Encouraging informed choices and community understanding of cancer prevention.</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="support-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-shield-check"></i></div>
              <h3>Prevention</h3>
              <p>Reducing risk through education, screening and healthy community practices.</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="support-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-clipboard2-pulse"></i></div>
              <h3>Early Detection</h3>
              <p>Helping communities access screening and timely diagnosis before complications arise.</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="support-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-people"></i></div>
              <h3>Support</h3>
              <p>Providing compassionate care, guidance and community-based advocacy for patients and families.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section soft-bg reveal-section">
      <div class="container">
        <div class="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <div>
            <span class="section-kicker">News & Updates</span>
            <h2 class="section-title mb-0">Recent community stories</h2>
          </div>
          <router-link class="btn btn-outline-primary" to="/news">View All News</router-link>
        </div>

        <div class="row g-4">
          <div v-for="item in newsCards" :key="item.slug" class="col-lg-4">
            <NewsCard :item="item" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="section-kicker">Our team</span>
          <h2 class="section-title">People behind the mission</h2>
        </div>

        <div class="row g-4">
          <div v-for="member in teamPreview" :key="member.name" class="col-sm-6 col-lg-4">
            <TeamCard :member="member" />
          </div>
        </div>
      </div>
    </section>

    <section class="section soft-bg">
      <div class="container">
        <div class="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <div>
            <span class="section-kicker">Resources</span>
            <h2 class="section-title mb-0">Awareness and educational materials</h2>
          </div>
          <router-link class="btn btn-outline-primary" to="/resources">View All Resources</router-link>
        </div>

        <div class="row g-4">
          <div v-for="item in resourceCards.slice(0, 6)" :key="item.title" class="col-md-6 col-xl-4">
            <ResourceCard :item="item" />
          </div>
        </div>
      </div>
    </section>

    <section class="section contact-band reveal-section">
      <div class="container">
        <div class="cta-panel surface-card">
          <div class="row align-items-center g-4">
            <div class="col-lg-8">
              <span class="section-kicker">Get involved</span>
              <h2 class="section-title mb-0">Support the foundation’s work to create healthier communities</h2>
            </div>
            <div class="col-lg-4 text-lg-end">
              <router-link class="site-btn" to="/contact">Contact Foundation</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section donation-section reveal-section">
      <div class="container">
        <div class="donation-panel surface-card">
          <div class="row align-items-center g-4">
            <div class="col-lg-8">
              <span class="section-kicker">Your support matters</span>
              <h2>Help create a healthier future, together</h2>
              <p class="donation-copy">Your contribution helps us take trusted cancer awareness, screening guidance and compassionate support closer to families across Nepal.</p>
            </div>
            <div class="col-lg-4 text-lg-end">
                <router-link class="site-btn donation-btn" to="/donate">Make a difference <i class="bi bi-arrow-up-right"></i></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  isolation: isolate;
  min-height: 560px;
  padding: 5rem 0 6rem;
  background-image: linear-gradient(90deg, rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.36)), var(--hero-image);
  background-position: center;
  background-size: cover;
  color: var(--color-white);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-section::after {
  position: absolute;
  right: -8rem;
  bottom: -10rem;
  width: 34rem;
  height: 34rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  content: '';
  z-index: 0;
  animation: hero-orbit 16s linear infinite;
}

.hero-section::before {
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 42px;
  background: #f5faf4;
  clip-path: ellipse(62% 100% at 50% 100%);
  content: '';
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-copy h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.06em;
  max-width: 620px;
  margin-bottom: 1.2rem;
  animation: handwritten-title 6s both ease-out;
}

.hero-copy h1 em {
  color: #ffb0a8;
  font-style: normal;
}

.hero-copy p {
  max-width: 640px;
  margin-bottom: 1.8rem;
  color: rgba(255, 255, 255, 0.86);
  font-size: 1.1rem;
  animation: handwritten-subtitle 4.5s 1.4s both ease-out;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.11);
  color: #fff;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
  animation: hero-enter 0.8s both ease-out;
}

.hero-copy .btn-outline-light {
  border-color: rgba(255, 255, 255, 0.65);
  color: var(--color-white);
}

.hero-copy .btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.14);
  color: var(--color-white);
}

.hero-actions {
  margin-top: 1.5rem;
  animation: hero-enter 0.8s 0.22s both ease-out;
}

.hero-visual {
  position: relative;
  min-height: 340px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  animation: hero-float 6s ease-in-out infinite;
}

.hero-image-wrap {
  width: min(100%, 390px);
  height: 340px;
  margin: 0 auto;
  overflow: hidden;
  border: 10px solid rgba(255, 255, 255, 0.88);
  border-radius: 48% 48% 18% 18%;
  box-shadow: 0 28px 55px rgba(13, 5, 10, 0.32);
  transform: rotate(3deg);
}

.hero-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.hero-visual:hover .hero-image-wrap img {
  transform: scale(1.06);
}

.hero-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.8rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.94);
  color: var(--color-primary);
  box-shadow: 0 16px 35px rgba(13, 5, 10, 0.2);
  font-size: 0.72rem;
  line-height: 1.2;
  backdrop-filter: blur(8px);
}

.hero-badge i {
  font-size: 1.35rem;
}

.hero-badge strong {
  display: block;
  font-size: 0.9rem;
}

.hero-badge-top {
  top: 2rem;
  left: 0;
}

.hero-badge-bottom {
  right: -0.4rem;
  bottom: 0.8rem;
  gap: 0.45rem;
}

.hero-badge-bottom strong {
  font-size: 1.4rem;
  line-height: 1;
}

.hero-panel {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(255, 255, 255, 0.7);
  color: var(--color-primary-dark);
  position: relative;
  z-index: 2;
  animation: hero-enter 0.8s 0.3s both ease-out;
}

.hero-panel h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  animation: handwritten-subtitle 4.5s 1.8s both ease-out;
}

.hero-panel p,
.hero-panel li {
  color: var(--color-muted);
}

.hero-panel ul {
  margin: 1rem 0 0;
  padding-left: 1.1rem;
}

.impact-strip {
  margin-top: -2.4rem;
  position: relative;
  z-index: 3;
}

.impact-card {
  padding: 1.6rem 1.4rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.impact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 42px rgba(33, 20, 20, 0.14);
}

.service-highlight {
  position: relative;
  overflow: hidden;
  padding: 1.8rem 1.5rem;
  border-color: rgba(87, 174, 79, 0.18);
  text-align: left;
}

.service-highlight::after {
  position: absolute;
  right: -2.5rem;
  bottom: -3rem;
  width: 8rem;
  height: 8rem;
  border: 1px solid rgba(87, 174, 79, 0.16);
  border-radius: 50%;
  content: '';
}

.service-highlight .impact-icon {
  margin: 0 0 1.1rem;
  background: rgba(87, 174, 79, 0.14);
  color: var(--color-primary);
}

.service-highlight h3 {
  max-width: 16rem;
}

.impact-icon,
.service-icon {
  width: 54px;
  height: 54px;
  margin: 0 auto 1rem;
  border-radius: 16px;
  background: rgba(87, 174, 79, 0.12);
  color: var(--color-primary);
  display: grid;
  place-items: center;
  font-size: 1.6rem;
}

.impact-card h3,
.service-card h3,
.support-card h3 {
  color: var(--color-primary-dark);
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
}

.impact-card p,
.service-card p,
.support-card p {
  color: var(--color-muted);
  margin-bottom: 0;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1rem;
  color: var(--color-primary);
  font-size: 0.82rem;
  font-weight: 800;
}

.soft-bg {
  background: var(--color-warm-gray);
}

.image-grid {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-soft);
}

.image-grid img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  background: var(--color-white);
}

.about-points {
  display: grid;
  gap: 1rem;
  margin: 2rem 0;
}

.about-points strong {
  display: block;
  color: var(--color-primary-dark);
  margin-bottom: 0.35rem;
}

.about-points p {
  color: var(--color-muted);
  margin: 0;
}

.service-card,
.support-card {
  padding: 1.6rem 1.4rem;
  transition: transform 0.25s ease;
}

.service-card:hover,
.support-card:hover {
  transform: translateY(-4px);
}

.service-card a {
  color: var(--color-primary);
  font-weight: 700;
  margin-top: 1rem;
  display: inline-block;
}

.featured-panel {
  overflow: hidden;
}

.featured-image {
  min-height: 100%;
}

.featured-image img {
  min-height: 100%;
  object-fit: contain;
  background: var(--color-white);
}

.featured-copy {
  padding: 2.5rem;
}

.featured-copy h2 {
  color: var(--color-primary-dark);
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
}

.featured-copy p {
  color: var(--color-muted);
  margin-bottom: 1.3rem;
}

.featured-copy ul {
  padding-left: 1.2rem;
  color: var(--color-text);
  margin-bottom: 1.7rem;
}

.cta-panel,
.donation-panel {
  padding: 2rem 2.2rem;
}

.donation-panel {
  background: linear-gradient(135deg, #2f7d32, #57ae4f);
  color: var(--color-white);
  position: relative;
  overflow: hidden;
  padding: 3rem 2.8rem;
}

.donation-panel::before {
  position: absolute;
  right: -4rem;
  top: -8rem;
  width: 24rem;
  height: 24rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  content: '';
}

.donation-panel > .row {
  position: relative;
  z-index: 1;
}

.donation-panel h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.04em;
  color: var(--color-white);
}

.donation-panel .section-kicker {
  background: rgba(255, 255, 255, 0.16);
  color: var(--color-white);
}

.donation-copy {
  max-width: 42rem;
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, 0.82);
}

.donation-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-white);
  color: var(--color-primary);
  box-shadow: 0 14px 28px rgba(30, 8, 16, 0.28);
}

.donation-btn:hover {
  color: var(--color-primary-dark);
  background: #fff8f7;
}

.contact-band {
  padding-top: 0;
}

.reveal-section {
  animation: section-reveal 0.8s both ease-out;
}

@keyframes hero-enter {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(0.5deg);
  }
}

@keyframes hero-orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes section-reveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991px) {
  .hero-section {
    min-height: 0;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .hero-copy {
    text-align: center;
  }

  .hero-copy h1,
  .hero-copy p {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .featured-copy {
    padding: 1.8rem;
  }

  .hero-visual {
    max-width: 430px;
    margin: 1.5rem auto 0;
  }
}

@media (max-width: 575px) {
  .hero-section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .hero-image-wrap {
    width: 82%;
    height: 280px;
  }

  .hero-visual {
    min-height: 300px;
  }

  .hero-badge-top {
    left: 0;
    top: 1rem;
  }

  .hero-badge-bottom {
    right: 0;
    bottom: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-copy h1,
  .hero-copy p,
  .hero-eyebrow,
  .hero-actions,
  .hero-panel,
  .hero-visual,
  .hero-section::after,
  .reveal-section {
    animation: none;
  }
}
</style>
