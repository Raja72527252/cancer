<script setup>
</script>

<template>
  <footer class="site-footer">
    <div class="container py-5">
      <div class="row g-4 justify-content-between">
        <div class="col-lg-4">
          <div class="footer-brand">
            <div class="brand-mark">
              <img src="/images/logo-111-768x147.jpg" alt="Tulasi Maya Memorial Cancer Relief Foundation" />
            </div>
          </div>
          <p class="footer-intro">Working with communities across Nepal to make cancer awareness, prevention, early detection and compassionate support more accessible.</p>
          <router-link class="footer-cta" to="/donate"><i class="bi bi-heart-fill"></i> Support our mission</router-link>
        </div>

        <div class="col-lg-3 col-md-4">
          <h6>Contact</h6>
          <ul>
            <li>Tokha Mun-03, Kathmandu</li>
            <li>Bagmati Province, Nepal</li>
            <li><a href="mailto:info@tumamcarefoundation.org.np">info@tumamcarefoundation.org.np</a></li>
            <li><a href="mailto:admin@tumamcarefoundation.org.np">admin@tumamcarefoundation.org.np</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <span>Copyright © 2026 TUMAMCARE FOUNDATION</span>
        <div class="footer-links d-flex align-items-center gap-3 flex-wrap">
          <span class="digital-partner">
            Digital Partner -
            <a href="https://infiniteitsolutionsnepal.com/" target="_blank" rel="noopener">
              Infinite IT Solution Nepal
            </a>
            <a
              class="digital-partner-icon"
              href="https://infiniteitsolutionsnepal.com/"
              target="_blank"
              rel="noopener"
              aria-label="Infinite IT Solution Nepal"
              title="Infinite IT Solution Nepal"
            >
              <i class="bi bi-globe2"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #e4f2e1;
  color: #315b32;
  margin-top: 4rem;
  border-top: 1px solid rgba(87, 174, 79, 0.22);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.brand-mark {
  width: 190px;
  height: 58px;
  overflow: hidden;
  border-radius: 12px;
  background: var(--color-white);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.brand-mark img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer-brand h5 {
  margin: 0;
  color: var(--color-white);
  font-weight: 800;
}

.footer-brand p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-intro {
  color: #527054;
  max-width: 24rem;
}

.footer-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1rem;
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(87, 174, 79, 0.35);
  border-radius: 999px;
  color: #000000 !important;
  font-size: 0.82rem !important;
  font-weight: 800;
}

.site-footer h6 {
  color: #285b2b;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}

.site-footer a,
.site-footer li {
  color: #527054;
  font-size: 0.95rem;
}

.site-footer a:hover {
  color: #000000;
}

.footer-bottom {
  border-top: 1px solid rgba(87, 174, 79, 0.2);
  padding: 1rem 0;
  font-size: 0.9rem;
}

.footer-links {
  color: #527054;
}

.digital-partner {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.digital-partner-icon {
  display: inline-grid;
  width: 1.5rem;
  height: 1.5rem;
  place-items: center;
  border-radius: 50%;
  background: rgba(87, 174, 79, 0.14);
  color: #000000 !important;
  transition: background 0.2s ease, transform 0.2s ease;
}

.digital-partner-icon:hover {
  background: var(--color-primary);
  color: var(--color-white) !important;
  transform: translateY(-2px);
}

@media (max-width: 767px) {
  .site-footer {
    margin-top: 2.5rem;
  }

  .site-footer .container {
    width: min(100% - 2rem, var(--container));
  }

  .footer-brand {
    margin-bottom: 1rem;
  }

  .brand-mark {
    width: min(190px, 100%);
  }

  .footer-intro {
    max-width: none;
  }

  .footer-bottom .container {
    align-items: flex-start !important;
  }

  .footer-links {
    width: 100%;
    gap: 0.75rem !important;
  }

  .digital-partner {
    flex-wrap: wrap;
    row-gap: 0.15rem;
    line-height: 1.5;
  }
}

@media (max-width: 360px) {
  .site-footer .container {
    width: calc(100% - 1rem);
    padding-right: 0.25rem;
    padding-left: 0.25rem;
  }

  .site-footer .container.py-5 {
    padding-top: 2.5rem !important;
    padding-bottom: 2.5rem !important;
  }

  .footer-bottom .container {
    gap: 0.75rem !important;
  }

  .footer-bottom {
    font-size: 0.78rem;
  }

  .digital-partner {
    align-items: flex-start;
    column-gap: 0.25rem;
    max-width: 100%;
  }

  .digital-partner > a:not(.digital-partner-icon) {
    overflow-wrap: anywhere;
  }

  .digital-partner-icon {
    flex: 0 0 auto;
  }
}

</style>
