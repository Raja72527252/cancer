<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/banner-via-myagde3-1-scaled.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Get Involved</li>
          </ol>
        </nav>
        <h1>Get Involved</h1>
        <p>
          Join us in supporting cancer awareness, prevention and community health outreach.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-6 col-xl-3">
            <div class="service-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-cash-coin"></i></div>
              <h3>Donate</h3>
              <p>Support screening programs, awareness campaigns and direct patient support.</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="service-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-person-heart"></i></div>
              <h3>Volunteer</h3>
              <p>Contribute time, skills and community outreach where it matters most.</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="service-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-megaphone"></i></div>
              <h3>Awareness</h3>
              <p>Help build informed communities through campaigns and health education.</p>
            </div>
          </div>
          <div class="col-md-6 col-xl-3">
            <div class="service-card surface-card h-100">
              <div class="service-icon"><i class="bi bi-envelope"></i></div>
              <h3>Contact</h3>
              <p>Reach out to the foundation to learn where your support can make the most difference.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-card {
  padding: 1.6rem 1.3rem;
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
  margin: 0;
}
</style>
