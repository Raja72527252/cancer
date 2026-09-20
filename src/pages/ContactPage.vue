<script setup>
const contactInfo = [
  { label: 'Email', value: 'admin@tumamcarefoundation.org.np' },
  { label: 'Email', value: 'info@tumamcarefoundation.org.np' },
  { label: 'Office Time', value: 'Sunday to Friday (10am to 5pm)' },
  { label: 'Address', value: 'Tokha Mun-03, Kathmandu, Bagmati Province, Nepal' }
]
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/banner-via-myagde3-1-scaled.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
        <h1>Contact</h1>
        <p>
          We welcome inquiries about our programs, outreach, collaboration and support opportunities.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-4 align-items-stretch">
          <div class="col-lg-5">
            <div class="content-box h-100">
              <span class="section-kicker">Contact us</span>
              <h2 class="section-title mb-4">Reach out</h2>
              <div class="contact-list">
                <div v-for="item in contactInfo" :key="item.label + item.value" class="contact-item">
                  <strong>{{ item.label }}</strong>
                  <p>{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="content-box">
              <h3 class="mb-3">Send us a message</h3>
              <form class="contact-form">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label>First Name</label>
                    <input type="text" placeholder="Your first name" />
                  </div>
                  <div class="col-md-6">
                    <label>Last Name</label>
                    <input type="text" placeholder="Your last name" />
                  </div>
                  <div class="col-md-6">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com" />
                  </div>
                  <div class="col-md-6">
                    <label>Phone</label>
                    <input type="text" placeholder="Phone number" />
                  </div>
                  <div class="col-12">
                    <label>Message</label>
                    <textarea rows="5" placeholder="How can we help?"></textarea>
                  </div>
                  <div class="col-12 text-end">
                    <button type="button" class="site-btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="container">
        <div class="map-panel surface-card">
          <div class="map-overlay"></div>
          <div class="map-content">
            <h3>Visit us</h3>
            <p>Tokha Mun-03, Kathmandu, Bagmati Province, Nepal</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-list {
  display: grid;
  gap: 1rem;
}

.contact-item strong {
  display: block;
  margin-bottom: 0.2rem;
  color: var(--color-primary-dark);
}

.contact-item p {
  margin: 0;
  color: var(--color-muted);
}

.contact-form label {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--color-primary-dark);
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(87, 174, 79, 0.2);
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
  background: #fff;
  color: var(--color-text);
}

.map-panel {
  position: relative;
  height: 260px;
  overflow: hidden;
  background: url('/images/banner-via-myagde3-1-scaled.jpg') center/cover no-repeat;
}

.map-overlay {
  position: absolute;
  inset: 0;
  background: rgba(19, 15, 15, 0.32);
}

.map-content {
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  z-index: 1;
  color: var(--color-white);
}

.map-content h3 {
  margin: 0 0 0.4rem;
  font-weight: 800;
}

.map-content p {
  margin: 0;
}
</style>
