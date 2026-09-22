import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import WhatWeDoPage from '../pages/WhatWeDoPage.vue'
import ProgramsPage from '../pages/ProgramsPage.vue'
import ProgramDetailPage from '../pages/ProgramDetailPage.vue'
import TeamPage from '../pages/TeamPage.vue'
import NewsPage from '../pages/NewsPage.vue'
import NewsDetailPage from '../pages/NewsDetailPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import BlogDetailPage from '../pages/BlogDetailPage.vue'
import ResourcesPage from '../pages/ResourcesPage.vue'
import DonatePage from '../pages/DonatePage.vue'
import GetInvolvedPage from '../pages/GetInvolvedPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import SubPage from '../pages/SubPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/about/introduction', name: 'introduction', component: SubPage },
  { path: '/about/vision-mission-objectives', name: 'vision-mission-objectives', component: SubPage },
  { path: '/about/organizational-structure', name: 'organizational-structure', component: SubPage },
  { path: '/about/vision-mission', name: 'vision-mission', component: SubPage },
  { path: '/about/our-team', name: 'about-our-team', component: TeamPage },
  { path: '/what-we-do', name: 'what-we-do', component: WhatWeDoPage },
  { path: '/what-we-do/:slug', name: 'what-we-do-detail', component: SubPage, props: true },
  { path: '/programs', name: 'programs', component: ProgramsPage },
  { path: '/programs/upcoming', name: 'upcoming-programs', component: SubPage },
  { path: '/programs/running', name: 'running-programs', component: SubPage },
  { path: '/programs/completed', name: 'completed-programs', component: SubPage },
  { path: '/programs/:slug', name: 'program-detail', component: ProgramDetailPage, props: true },
  { path: '/our-team', redirect: '/about/our-team' },
  { path: '/news', name: 'news', component: NewsPage },
  { path: '/news/blog', name: 'news-blog', component: BlogPage },
  { path: '/news/:slug', name: 'news-detail', component: NewsDetailPage, props: true },
  { path: '/blog', redirect: '/news/blog' },
  { path: '/blog/:slug', name: 'blog-detail', component: BlogDetailPage, props: true },
  { path: '/resources', name: 'resources', component: ResourcesPage },
  { path: '/resources/:slug', name: 'resource-detail', component: SubPage, props: true },
  { path: '/get-involved/donate', name: 'get-involved-donate', component: DonatePage },
  { path: '/donate', redirect: '/get-involved/donate' },
  { path: '/get-involved', name: 'get-involved', component: GetInvolvedPage },
  { path: '/get-involved/events', name: 'events', component: SubPage },
  { path: '/get-involved/volunteer', name: 'volunteer', component: SubPage },
  { path: '/news/media-release', name: 'media-release', component: SubPage },
  { path: '/news/media-contact', name: 'media-contact', component: SubPage },
  { path: '/gallery/photos', name: 'gallery-photos', component: SubPage },
  { path: '/gallery/videos', name: 'gallery-videos', component: SubPage },
  { path: '/downloads/:slug', name: 'download-detail', component: SubPage, props: true },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  const titles = {
    home: 'Home | TUMAMCARE',
    about: 'About | TUMAMCARE',
    introduction: 'Introduction | TUMAMCARE',
    'vision-mission-objectives': 'Vision, Mission & Objectives | TUMAMCARE',
    'organizational-structure': 'Organizational Structure | TUMAMCARE',
    'vision-mission': 'Vision & Mission | TUMAMCARE',
    'about-our-team': 'Our Team | TUMAMCARE',
    'what-we-do': 'What We Do | TUMAMCARE',
    'what-we-do-detail': 'What We Do | TUMAMCARE',
    programs: 'Programs | TUMAMCARE',
    'upcoming-programs': 'Upcoming Programs | TUMAMCARE',
    'running-programs': 'Running Programs | TUMAMCARE',
    'completed-programs': 'Completed Programs | TUMAMCARE',
    'our-team': 'Our Team | TUMAMCARE',
    news: 'News & Updates | TUMAMCARE',
    'news-detail': 'News Article | TUMAMCARE',
    resources: 'Resources | TUMAMCARE',
    'resource-detail': 'Resources | TUMAMCARE',
    donate: 'Donate | TUMAMCARE',
    'get-involved': 'Get Involved | TUMAMCARE',
    events: 'Events | TUMAMCARE',
    volunteer: 'Volunteer | TUMAMCARE',
    'media-release': 'Media Release | TUMAMCARE',
    'media-contact': 'Media Contact | TUMAMCARE',
    blog: 'Blog | TUMAMCARE',
    'news-blog': 'Blog | TUMAMCARE',
    'blog-detail': 'Blog Article | TUMAMCARE',
    'gallery-photos': 'Photos | TUMAMCARE',
    'gallery-videos': 'Videos | TUMAMCARE',
    'download-detail': 'Downloads | TUMAMCARE',
    contact: 'Contact | TUMAMCARE'
  }

  const metaTitle = titles[to.name] || 'TUMAMCARE'
  document.title = metaTitle

  const metaDescription = 'Tulasi Maya Memorial Cancer Relief Foundation works to improve cancer awareness, prevention, early detection and support for vulnerable communities in Nepal.'
  let descriptionTag = document.querySelector('meta[name="description"]')
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.setAttribute('name', 'description')
    document.head.appendChild(descriptionTag)
  }
  descriptionTag.setAttribute('content', metaDescription)
})

export default router
