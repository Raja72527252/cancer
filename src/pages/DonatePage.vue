<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image" style="--page-hero-image: url('/images/IMG_2577.jpg')">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">Donate</li>
          </ol>
        </nav>
        <h1>Donate</h1>
        <p>
          Your support helps extend awareness, screening and compassionate care to those who need it most.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-lg-8">
            <div class="content-box">
              <span class="section-kicker">Support our mission</span>
              <h2 class="section-title">Together, We Can Make a Difference</h2>
              <p class="lead">
                Donations help the foundation strengthen community outreach, cancer awareness, screening and support programs for vulnerable populations.
              </p>
              <router-link class="site-btn" to="/get-involved">Support Our Mission</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
