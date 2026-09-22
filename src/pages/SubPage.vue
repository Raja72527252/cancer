<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { downloadItems, galleryPhotos, galleryVideos } from '../data/siteData'

const route = useRoute()
const isPhotosPage = computed(() => route.path === '/gallery/photos')
const isVideosPage = computed(() => route.path === '/gallery/videos')
const isDownloadPage = computed(() => route.path.startsWith('/downloads/'))
const download = computed(() => downloadItems[route.params.slug])

const createPdfDownload = () => {
  const item = download.value
  if (!item) return
  const escapePdf = value => value.replace(/([\\()])/g, '\\$1')
  const text = `${item.title}\\nTulasi Maya Memorial Cancer Relief Foundation\\nCancer awareness, prevention, early detection and support in Nepal.`
  const stream = `BT /F1 18 Tf 72 720 Td (${escapePdf(item.title)}) Tj /F1 11 Tf 0 -32 Td (${escapePdf(text.split('\\n')[1])}) Tj 0 -22 Td (${escapePdf(text.split('\\n')[2])}) Tj ET`
  const pdf = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]/Resources<</Font<</F1 4 0 R>>>>/Contents 5 0 R>>endobj
4 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
5 0 obj<</Length ${stream.length}>>stream
${stream}
endstream endobj
xref
0 6
0000000000 65535 f 
trailer<</Size 6/Root 1 0 R>>
startxref
0
%%EOF`
  const blob = new Blob([pdf], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${item.title.toLowerCase()}-tumamcare.pdf`
  link.click()
  URL.revokeObjectURL(url)
}

const content = {
  '/about/introduction': {
    kicker: 'About TUMAMCARE',
    title: 'Introduction',
    intro: 'A not-for-profit organization working for cancer awareness, prevention, early detection and support in Nepal.',
    heading: 'A foundation rooted in compassion and action',
    body: 'Tulasi Maya Memorial Cancer Relief Foundation is a non-governmental organization registered in Kathmandu and affiliated with the Social Welfare Council. It was established in memory of Late Tulasi Maya and works to improve the quality of life of people affected by cancer.',
    image: '/images/INTRODUCTION-IMAGE-768x469.jpg'
  },
  '/about/vision-mission-objectives': {
    kicker: 'Our direction',
    title: 'Vision, Mission & Objectives',
    intro: 'A good life without cancer and despite cancer, supported by prevention, early diagnosis and compassionate care.',
    heading: 'Working towards a life without cancer',
    body: 'Our vision is a healthier Nepal where fewer people develop preventable cancer, more people are diagnosed early and patients receive timely, dignified support. Our objectives focus on awareness, screening, referral, advocacy and partnerships.',
    image: '/images/cancer-education-program.jpg'
  },
  '/about/organizational-structure': {
    kicker: 'About TUMAMCARE',
    title: 'Organizational Structure',
    intro: 'A committed leadership, advisory and program team working together for the foundation’s mission.',
    heading: 'People and partnerships behind the mission',
    body: 'The foundation brings together an executive committee, advisory board and operational team. Their combined experience supports responsible governance, community programs and patient-focused services.',
    image: '/images/IMG_2482-scaled.jpg'
  },
  '/about/vision-mission': {
    kicker: 'Our direction',
    title: 'Vision & Mission',
    intro: 'A good life without cancer and despite cancer, supported by prevention, early diagnosis and compassionate care.',
    heading: 'Working towards a life without cancer',
    body: 'Tulasi Maya Memorial Cancer Relief Foundation works to reduce the burden of cancer in Nepal through awareness, prevention, screening, timely referral and practical guidance for patients and families.',
    image: '/images/INTRODUCTION-IMAGE-768x469.jpg'
  },
  '/get-involved/volunteer': {
    kicker: 'Join the movement',
    title: 'Volunteer With Us',
    intro: 'Use your time, skills and voice to help communities learn about cancer prevention and early detection.',
    heading: 'Make a meaningful contribution',
    body: 'Volunteers can support awareness events, community outreach, fundraising, communications and patient-support activities. Contact the foundation to explore a role that fits your interests.',
    image: '/images/IMG_2577.jpg'
  },
  '/get-involved/events': {
    kicker: 'Get involved',
    title: 'Events',
    intro: 'Join community events, awareness activities and screening initiatives organized with local partners.',
    heading: 'Be part of community action',
    body: 'Our events create space for education, screening, dialogue and solidarity. Follow foundation updates or contact us to participate in an upcoming activity.',
    image: '/images/banner-via-myagde3-1-scaled.jpg'
  },
  '/about/what-we-do/cancer-prevention': {
    kicker: 'What we do',
    title: 'Cancer Prevention',
    intro: 'Helping communities understand risk factors and make healthier choices.',
    heading: 'Prevention starts with awareness',
    body: 'Our prevention work shares practical health information, promotes healthy choices and connects communities with trusted public-health resources.'
  },
  '/about/what-we-do/early-detection': {
    kicker: 'What we do',
    title: 'Early Detection',
    intro: 'Promoting timely screening, referral and access to reliable information.',
    heading: 'Earlier action can save lives',
    body: 'We help people recognize warning signs, access screening opportunities and understand the next steps after a referral.'
  },
  '/about/what-we-do/cancer-awareness': {
    kicker: 'What we do',
    title: 'Cancer Awareness',
    intro: 'Building knowledge and reducing stigma through community education.',
    heading: 'Clear information creates confidence',
    body: 'Our awareness activities address misinformation and make cancer prevention, symptoms, screening and support easier to understand.'
  },
  '/about/what-we-do/treatment-support': {
    kicker: 'What we do',
    title: 'Treatment Support',
    intro: 'Standing with patients and families as they navigate cancer care.',
    heading: 'Compassion beyond diagnosis',
    body: 'We provide guidance, practical support and referral connections to help patients and families move through treatment with dignity.'
  },
  '/about/what-we-do/screening': {
    kicker: 'What we do',
    title: 'Screening',
    intro: 'Supporting community-based screening and referral initiatives.',
    heading: 'Making screening more accessible',
    body: 'Our screening activities focus on underserved communities, especially women who face barriers to timely preventive care.'
  },
  '/about/what-we-do/tobacco-control': {
    kicker: 'What we do',
    title: 'Tobacco Control',
    intro: 'Reducing tobacco-related harm through education and public-health action.',
    heading: 'Healthier communities start with prevention',
    body: 'We work with communities and public institutions to increase understanding of tobacco harms and encourage prevention.'
  },
  '/about/what-we-do/community-outreach': {
    kicker: 'What we do',
    title: 'Community Outreach',
    intro: 'Taking cancer education and support closer to the people who need it.',
    heading: 'Community trust drives impact',
    body: 'Outreach connects local families, health workers and partners through respectful dialogue, education and practical support.',
    image: '/images/cancer-education-program.jpg'
  },
  '/programs/upcoming': {
    kicker: 'Programs',
    title: 'Upcoming Programs',
    intro: 'New awareness, screening and community-support activities planned by the foundation.',
    heading: 'Preparing the next wave of impact',
    body: 'Upcoming activities are designed around community needs and public-health priorities. Program announcements will include location, participation details and partner information.',
    image: '/images/banner-via-myagde3-1-scaled.jpg'
  },
  '/programs/running': {
    kicker: 'Programs',
    title: 'Running Programs',
    intro: 'Our current cancer awareness, screening and tobacco-control initiatives.',
    heading: 'Programs currently serving communities',
    body: 'Tumamcare continues to run cervical cancer screening, breast cancer awareness and tobacco-control activities for underserved communities in Nepal.',
    image: '/images/e60c507e-bdeb-40ad-974f-d14e6561fb9f-e1687192809668-768x436.jpg'
  },
  '/programs/completed': {
    kicker: 'Programs',
    title: 'Completed Programs',
    intro: 'A record of completed outreach, awareness and screening activities.',
    heading: 'Learning from every completed activity',
    body: 'Completed programs help the foundation measure reach, learn from communities and strengthen future awareness and screening work.',
    image: '/images/IMG_2482-scaled.jpg'
  },
  '/resources/breast-cancer': {
    kicker: 'Resource library',
    title: 'Breast Cancer',
    intro: 'Educational information on breast cancer awareness, prevention and early detection.',
    heading: 'Know the signs and screening options',
    body: 'Use this resource to start conversations about breast health, understand common warning signs and encourage timely clinical guidance.'
  },
  '/resources/cervical-cancer': {
    kicker: 'Resource library',
    title: 'Cervical Cancer',
    intro: 'Key information on cervical cancer, screening and early detection.',
    heading: 'Screening supports early action',
    body: 'Learn why regular screening matters and share reliable information with women, families and community health workers.'
  },
  '/resources/cancer-nutrition': {
    kicker: 'Resource library',
    title: 'Cancer & Nutrition',
    intro: 'Guidance on healthy nutrition and supportive living during cancer care.',
    heading: 'Supportive nutrition matters',
    body: 'Balanced nutrition can support wellbeing during care. Patients should discuss individual dietary needs with their healthcare team.'
  },
  '/resources/tobacco-control': {
    kicker: 'Resource library',
    title: 'Tobacco Control',
    intro: 'Awareness content on tobacco-related harm, prevention and healthier choices.',
    heading: 'Choose a tobacco-free future',
    body: 'Understanding the risks of tobacco is an important step toward prevention. Share this information and seek support to quit.'
  },
  '/resources/what-is-cancer': {
    kicker: 'Resource library',
    title: 'What is Cancer?',
    intro: 'A clear introduction to cancer basics and common risk factors.',
    heading: 'Understanding cancer starts with facts',
    body: 'Cancer is a group of diseases involving abnormal cell growth. Reliable information helps people recognize risks and seek care early.',
    image: '/images/cancer-education-program.jpg'
  },
  '/news/media-release': {
    kicker: 'News',
    title: 'Media Release',
    intro: 'Official updates and announcements from Tulasi Maya Memorial Cancer Relief Foundation.',
    heading: 'Stay informed about our work',
    body: 'Media releases share important program updates, partnerships, community activities and public-health messages from the foundation.',
    image: '/images/banner-via-myagde3-1-scaled.jpg'
  },
  '/news/media-contact': {
    kicker: 'News',
    title: 'Media Contact',
    intro: 'Connect with the foundation for accurate information, interviews and community-health stories.',
    heading: 'Let’s share stories that create awareness',
    body: 'For media inquiries, program information or interview requests, please contact the foundation team through our Contact page.',
    image: '/images/IMG_2482-scaled.jpg'
  },
  '/news/blog': {
    kicker: 'News',
    title: 'Blog',
    intro: 'Stories, reflections and practical information about cancer awareness and community health.',
    heading: 'Knowledge that communities can use',
    body: 'Our blog will highlight field experiences, prevention guidance, screening awareness and the people who make community action possible.',
    image: '/images/cancer-education-program.jpg'
  },
  '/gallery/photos': {
    kicker: 'Gallery',
    title: 'Photos',
    intro: 'A visual record of awareness campaigns, screening activities and community events.',
    heading: 'See compassion in action',
    body: 'Explore moments from the foundation’s work with communities, health workers, partners and families.',
    image: '/images/gallery/IMG_2577.jpg'
  },
  '/gallery/videos': {
    kicker: 'Gallery',
    title: 'Videos',
    intro: 'Video stories and awareness messages from Tumamcare activities.',
    heading: 'Watch, learn and share',
    body: 'Videos help make cancer information accessible and bring community voices closer to the people we serve.',
    image: '/images/gallery/cancer-education-program.jpg'
  },
  '/downloads/brochure': {
    kicker: 'Downloads',
    title: 'Brochure',
    intro: 'Downloadable foundation information and cancer-awareness material.',
    heading: 'Keep useful information close',
    body: 'Our brochures introduce the foundation, explain key cancer topics and help families find practical awareness and screening guidance.',
    image: '/images/gallery/INTRODUCTION-IMAGE-768x469.jpg'
  },
  '/downloads/poster': {
    kicker: 'Downloads',
    title: 'Poster',
    intro: 'Shareable posters for cancer awareness, prevention and screening campaigns.',
    heading: 'Help important messages travel further',
    body: 'Posters can support community noticeboards, outreach activities and awareness events. Download and share approved foundation materials.',
    image: '/images/cancer-education-program.jpg'
  },
  '/downloads/books': {
    kicker: 'Downloads',
    title: 'Books',
    intro: 'Long-form educational material for deeper learning about cancer and public health.',
    heading: 'Learn at your own pace',
    body: 'Books and guides bring together practical knowledge for families, health workers, students and community partners.',
    image: '/images/IMG_2482-scaled.jpg'
  },
  '/downloads/journal': {
    kicker: 'Downloads',
    title: 'Journal',
    intro: 'Research, program learning and reflections from cancer-care work.',
    heading: 'Evidence strengthens action',
    body: 'Journals and learning resources help partners understand community needs and improve awareness, screening and support programs.',
    image: '/images/e5c076d3-e365-47b7-9ba3-40dc84974de0-e1687192940907-768x436.jpg'
  },
  '/downloads/report': {
    kicker: 'Downloads',
    title: 'Report',
    intro: 'Program updates and reports from the foundation.',
    heading: 'Transparency builds trust',
    body: 'Reports document activities, learning and progress so communities and partners can follow the foundation’s work.',
    image: '/images/banner-via-myagde3-1-scaled.jpg'
  },
  '/downloads/forms': {
    kicker: 'Downloads',
    title: 'Forms',
    intro: 'Useful forms for volunteers, partners, program participation and inquiries.',
    heading: 'Start your connection with Tumamcare',
    body: 'Download the relevant form and contact the foundation if you need help completing it or understanding the next step.',
    image: '/images/IMG_2577.jpg'
  }
}

const page = computed(() => {
  const selected = content[route.path] || {
    kicker: 'TUMAMCARE resources',
    title: route.params.slug ? route.params.slug.replaceAll('-', ' ') : 'Resource',
    intro: 'Practical information to support cancer awareness, prevention and healthier communities.',
    heading: 'Learn, share and take action',
    body: 'Explore trusted information from Tulasi Maya Memorial Cancer Relief Foundation and share it with your family and community.'
  }

  const imageByPath = {
    '/about/what-we-do/cancer-prevention': '/images/cancer-education-program.jpg',
    '/about/what-we-do/early-detection': '/images/e60c507e-bdeb-40ad-974f-d14e6561fb9f-e1687192809668-768x436.jpg',
    '/about/what-we-do/cancer-awareness': '/images/cancer-education-program.jpg',
    '/about/what-we-do/treatment-support': '/images/IMG_2577.jpg',
    '/about/what-we-do/screening': '/images/e5c076d3-e365-47b7-9ba3-40dc84974de0-e1687192940907-768x436.jpg',
    '/about/what-we-do/tobacco-control': '/images/IMG_2482-scaled.jpg',
    '/resources/breast-cancer': '/images/IMG_2577.jpg',
    '/resources/cervical-cancer': '/images/e60c507e-bdeb-40ad-974f-d14e6561fb9f-e1687192809668-768x436.jpg',
    '/resources/cancer-nutrition': '/images/INTRODUCTION-IMAGE-768x469.jpg',
    '/resources/tobacco-control': '/images/IMG_2482-scaled.jpg'
  }

  const pointsByPath = {
    '/about/introduction': ['Registered non-governmental foundation', 'Focused on vulnerable communities', 'Built around compassion and dignity'],
    '/about/vision-mission-objectives': ['Prevent avoidable cancer', 'Promote early diagnosis', 'Support patients and families'],
    '/about/organizational-structure': ['Executive committee', 'Advisory board', 'Program and support team'],
    '/programs/upcoming': ['Community-first planning', 'Local health partnerships', 'Public program announcements'],
    '/programs/running': ['Cervical cancer screening', 'Breast cancer awareness', 'Tobacco-control education'],
    '/programs/completed': ['Community reach', 'Program learning', 'Stronger future planning'],
    '/get-involved/events': ['Awareness activities', 'Screening initiatives', 'Community dialogue'],
    '/gallery/photos': ['Community events', 'Health education', 'Foundation outreach'],
    '/gallery/videos': ['Awareness stories', 'Public-health messages', 'Community voices']
  }

  const points = selected.points || pointsByPath[route.path] || [
    'Clear, community-friendly information',
    'Trusted guidance and referral support',
    'Compassionate action for better health'
  ]

  return {
    ...selected,
    image: isDownloadPage.value && download.value
      ? download.value.image
      : selected.image || imageByPath[route.path] || '/images/INTRODUCTION-IMAGE-768x469.jpg',
    points
  }
})
</script>

<template>
  <div class="page-shell">
    <section class="page-hero page-hero-image subpage-hero" :style="{ '--page-hero-image': `url(${page.image})` }">
      <div class="container">
        <nav aria-label="Breadcrumb" class="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ page.title }}</li>
          </ol>
        </nav>
        <span class="page-hero-label">{{ page.kicker }}</span>
        <h1 class="text-capitalize">{{ page.title }}</h1>
        <p>{{ page.intro }}</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-if="isPhotosPage" class="gallery-grid">
          <article v-for="photo in galleryPhotos" :key="photo.image" class="gallery-card surface-card">
            <a :href="photo.image" target="_blank" rel="noreferrer">
              <img :src="photo.image" :alt="photo.title" />
            </a>
            <div class="gallery-card-body">
              <h3>{{ photo.title }}</h3>
              <a class="gallery-download" :href="photo.image" :download="photo.title.toLowerCase().replaceAll(' ', '-') + '.jpg'">
                <i class="bi bi-download"></i> Download image
              </a>
            </div>
          </article>
        </div>

        <div v-else-if="isVideosPage" class="video-grid">
          <article v-for="video in galleryVideos" :key="video.source" class="video-card surface-card">
            <video controls preload="metadata" :poster="page.image">
              <source :src="video.source" type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div class="video-card-body">
              <span class="section-kicker">Foundation video</span>
              <h3>{{ video.title }}</h3>
              <a class="gallery-download" :href="video.source" target="_blank" rel="noreferrer">
                <i class="bi bi-play-circle"></i> Open video
              </a>
            </div>
          </article>
        </div>

        <div v-else-if="isDownloadPage && download" class="download-panel surface-card">
          <div class="download-preview image-frame">
            <img :src="download.image" :alt="download.title" />
          </div>
          <div class="download-copy">
            <span class="section-kicker">Download center</span>
            <h2 class="section-title">{{ download.title }}</h2>
            <p class="lead">Download the {{ download.title.toLowerCase() }} resource for offline use and sharing with your community.</p>
            <button v-if="download.type === 'PDF'" class="site-btn" type="button" @click="createPdfDownload">
              <i :class="download.icon" class="me-2"></i> Download PDF
            </button>
            <a
              v-else
              class="site-btn"
              :href="download.image"
              :download="download.title.toLowerCase() + '.jpg'"
            >
              <i :class="download.icon" class="me-2"></i> Download image
            </a>
            <p class="download-note"><i class="bi bi-info-circle me-1"></i>{{ download.type }} format</p>
          </div>
        </div>

        <div v-else class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div class="subpage-visual">
              <div class="image-frame subpage-image">
              <img :src="page.image" :alt="page.title" />
              </div>
              <div class="visual-caption">
                <i class="bi bi-heart-pulse"></i>
                <span>Compassion in action</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="content-box subpage-copy">
              <span class="section-kicker">{{ page.kicker }}</span>
              <h2 class="section-title">{{ page.heading }}</h2>
              <p class="lead">{{ page.body }}</p>
              <div class="subpage-points">
                <div v-for="(point, index) in page.points" :key="point" class="subpage-point">
                  <span>{{ String(index + 1).padStart(2, '0') }}</span>
                  <strong>{{ point }}</strong>
                </div>
              </div>
              <router-link class="site-btn" to="/contact">Contact Foundation</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.subpage-image {
  min-height: 390px;
  background: var(--color-white);
}

.subpage-image img {
  min-height: 390px;
  object-fit: contain;
  background: var(--color-white);
}

.gallery-grid,
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.gallery-card,
.video-card {
  overflow: hidden;
}

.gallery-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-card:hover img {
  transform: scale(1.04);
}

.gallery-card-body,
.video-card-body {
  padding: 1.1rem 1.2rem 1.25rem;
}

.gallery-card-body h3,
.video-card-body h3 {
  margin: 0 0 0.75rem;
  color: #000000;
  font-size: 1rem;
  font-weight: 800;
}

.gallery-download {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #000000;
  font-size: 0.8rem;
  font-weight: 800;
}

.gallery-download:hover {
  color: var(--color-secondary);
}

.video-card video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #18351b;
  object-fit: cover;
}

.video-card-body .section-kicker {
  margin-bottom: 0.55rem;
  font-size: 0.65rem;
}

.download-panel {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 2.5rem;
  align-items: center;
  padding: 2rem;
  border: 1px solid var(--color-border);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(247, 231, 231, 0.72));
}

.download-preview {
  min-height: 330px;
}

.download-preview img {
  width: 100%;
  height: 330px;
  object-fit: contain;
  background: var(--color-white);
}

.download-note {
  margin: 1rem 0 0;
  color: var(--color-muted);
  font-size: 0.82rem;
}

.page-hero-label {
  display: inline-block;
  margin-bottom: 0.8rem;
  color: #000000;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.subpage-hero {
  min-height: 330px;
}

.subpage-visual {
  position: relative;
  padding: 0;
}

.subpage-visual::before {
  display: none;
}

.subpage-image {
  position: relative;
  z-index: 1;
}

.visual-caption {
  position: absolute;
  right: 0.75rem;
  bottom: 1.8rem;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  background: var(--color-white);
  color: #000000;
  box-shadow: var(--shadow-card);
  font-size: 0.78rem;
  font-weight: 800;
}

.visual-caption i {
  font-size: 1rem;
}

.subpage-copy {
  padding: clamp(1.4rem, 3vw, 2.4rem);
}

.subpage-points {
  display: grid;
  gap: 0.65rem;
  margin: 1.5rem 0 1.8rem;
}

.subpage-point {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #000000;
}

.subpage-point span {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(87, 174, 79, 0.12);
  color: #000000;
  font-size: 0.7rem;
  font-weight: 800;
}

.subpage-point strong {
  font-size: 0.92rem;
}

@media (max-width: 575px) {
  .subpage-visual {
    padding-left: 0;
  }

  .visual-caption {
    right: 0.5rem;
  }

  .gallery-grid,
  .video-grid,
  .download-panel {
    grid-template-columns: 1fr;
  }

  .download-panel {
    padding: 1.25rem;
  }
}

@media (min-width: 576px) and (max-width: 991px) {
  .gallery-grid,
  .video-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
