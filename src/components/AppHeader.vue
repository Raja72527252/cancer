<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { navLinks } from '../data/siteData'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const menuClasses = computed(() => ({
  'navbar-collapse': true,
  show: isMenuOpen.value
}))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 18
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header :class="['site-header', { scrolled: isScrolled }]">
    <div class="topbar">
      <div class="container d-flex justify-content-between align-items-center gap-3 flex-wrap">
        <span><i class="bi bi-envelope me-2"></i>info@tumamcarefoundation.org.np</span>
        <span><i class="bi bi-geo-alt me-2"></i>Tokha Mun-03, Kathmandu, Bagmati Province, Nepal</span>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link class="brand" to="/" @click="closeMenu">
          <img src="/images/logo-111-768x147.jpg" alt="TULASI MAYA MEMORIAL CANCER RELIEF FOUNDATION" class="brand-logo" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="menuClasses" id="mainNav">
          <ul class="navbar-nav mx-auto align-items-lg-center">
            <li
              v-for="link in navLinks"
              :key="link.label"
              :class="['nav-item', { dropdown: link.children }]"
            >
              <router-link
                class="nav-link"
                :to="link.to"
                :aria-expanded="link.children ? 'false' : undefined"
                @click="closeMenu"
              >
                {{ link.label }}<i v-if="link.children" class="bi bi-chevron-down ms-1"></i>
              </router-link>
              <ul v-if="link.children" class="dropdown-menu">
                <li v-for="child in link.children" :key="child.to">
                  <router-link class="dropdown-item" :to="child.to" @click="closeMenu">{{ child.label }}</router-link>
                </li>
              </ul>
            </li>
          </ul>

          <div class="nav-actions d-flex gap-2 align-items-center">
            <router-link class="btn btn-donate" to="/donate">Donate</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition: all 0.25s ease;
}

.site-header.scrolled {
  box-shadow: 0 10px 25px rgba(17, 14, 14, 0.06);
  border-bottom-color: rgba(87, 174, 79, 0.12);
}

.topbar {
  background: #f4ecea;
  padding: 0.42rem 0;
  color: var(--color-primary);
  font-size: 0.76rem;
  letter-spacing: 0.02em;
}

.navbar {
  min-height: 76px;
  padding: 0.45rem 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  margin-left: -0.75rem;
}

.brand-logo {
  height: 62px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.navbar-nav {
  gap: 0.38rem;
  flex: 1;
  justify-content: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #111111;
  font-weight: 700;
  padding: 0.58rem 0.58rem !important;
  border-radius: 999px;
  transition: all 0.2s ease;
  font-size: 0.84rem;
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.dropdown-menu {
  min-width: 14rem;
  margin-top: 0.25rem;
  padding: 0.45rem;
  border: 1px solid rgba(87, 174, 79, 0.14);
  border-radius: 12px;
  box-shadow: 0 14px 30px rgba(17, 14, 14, 0.12);
}

.dropdown-item {
  padding: 0.5rem 0.65rem;
  border-radius: 8px;
  color: #111111;
  font-size: 0.78rem;
  font-weight: 600;
}

.dropdown-item:hover,
.dropdown-item.router-link-active {
  background: rgba(87, 174, 79, 0.1);
  color: #111111;
}

@media (min-width: 992px) {
  .navbar > .container {
    flex-wrap: nowrap;
  }

  .brand-logo {
    height: 52px;
    max-width: 270px;
  }

  .navbar-collapse {
    min-width: 0;
  }

  .navbar-nav {
    flex-wrap: nowrap;
  }

  .nav-item.dropdown:hover > .dropdown-menu {
    display: block;
  }
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(87, 174, 79, 0.08);
  color: #111111;
}

.navbar-toggler {
  border: 1px solid rgba(87, 174, 79, 0.2);
  border-radius: 12px;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(17,17,17,1)' stroke-linecap='round' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.nav-actions {
  margin-left: 0.75rem;
}

.btn-donate {
  background: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-primary);
  border-radius: 999px;
  font-weight: 800;
  padding: 0.65rem 1.25rem !important;
  box-shadow: 0 8px 18px rgba(46, 111, 42, 0.2);
}

.btn-donate:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-2px);
}

@media (max-width: 991px) {
  .navbar-collapse {
    display: none;
    padding-top: 1rem;
  }

  .navbar-collapse.show {
    display: block;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: start !important;
    margin: 0 0 1rem;
  }

  .dropdown-menu {
    position: static;
    display: block;
    border: 0;
    box-shadow: none;
    padding: 0 0 0.35rem 0.75rem;
  }

  .nav-actions {
    margin-left: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .brand-logo {
    height: 58px;
    margin-left: -0.25rem;
  }
}

@media (max-width: 575px) {
  .topbar {
    font-size: 0.7rem;
    text-align: center;
  }

  .brand-logo {
    height: 48px;
    margin-left: -0.15rem;
  }
}
</style>
