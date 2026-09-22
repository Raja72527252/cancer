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
            <span class="map-kicker"><i class="bi bi-geo-alt-fill"></i> Find us</span>
            <h3>Visit us</h3>
            <p>Tokha Mun-03, Kathmandu, Bagmati Province, Nepal</p>
          </div>
          <div class="map-decoration map-decoration-one"></div>
          <div class="map-decoration map-decoration-two"></div>
          <i class="bi bi-geo-alt map-pin" aria-hidden="true"></i>
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
  color: #000000;
}

.contact-item p {
  margin: 0;
  color: var(--color-muted);
}

.contact-form label {
  display: block;
  margin-bottom: 0.45rem;
  color: #000000;
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
  min-height: 280px;
  overflow: hidden;
  border: 0;
  background: linear-gradient(120deg, #2f6f2a 0%, #57ae4f 55%, #8bcf83 100%);
  box-shadow: 0 22px 45px rgba(46, 111, 42, 0.22);
}

.map-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0 1px, transparent 1px 32px),
    linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0 1px, transparent 1px 32px);
  background-size: 32px 32px;
  opacity: 0.45;
}

.map-content {
  position: absolute;
  left: clamp(1.5rem, 5vw, 4rem);
  bottom: clamp(1.5rem, 5vw, 3.5rem);
  z-index: 1;
  color: var(--color-white);
}

.map-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.65rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.map-content h3 {
  margin: 0 0 0.55rem;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.map-content p {
  margin: 0;
  max-width: 34rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.05rem;
}

.map-pin {
  position: absolute;
  top: 2.2rem;
  right: clamp(2rem, 10vw, 8rem);
  z-index: 1;
  color: rgba(255, 255, 255, 0.26);
  font-size: clamp(7rem, 18vw, 12rem);
  transform: rotate(-12deg);
}

.map-decoration {
  position: absolute;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

.map-decoration-one {
  right: -4rem;
  bottom: -8rem;
  width: 22rem;
  height: 22rem;
}

.map-decoration-two {
  right: 8rem;
  bottom: -11rem;
  width: 18rem;
  height: 18rem;
}
</style>
