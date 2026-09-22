export const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'Introduction', to: '/about/introduction' },
      { label: 'Vision, Mission & Objectives', to: '/about/vision-mission-objectives' },
      { label: 'Organizational Structure', to: '/about/organizational-structure' },
      { label: 'Our Teams', to: '/about/our-team' },
      { label: 'What We Do?', to: '/what-we-do' }
    ]

  },
  {
    label: 'Programs',
    to: '/programs',
    children: [
      { label: 'Upcoming Programs', to: '/programs/upcoming' },
      { label: 'Running Programs', to: '/programs/running' },
      { label: 'Completed Programs', to: '/programs/completed' }
    ]
  },
  {
    label: 'Get Involved',
    to: '/get-involved',
    children: [
      { label: 'Events', to: '/get-involved/events' },
      { label: 'Volunteer', to: '/get-involved/volunteer' },
      { label: 'Donate', to: '/get-involved/donate' }
    ]
  },
  {
    label: 'News',
    to: '/news',
    children: [
      { label: 'Media Release', to: '/news/media-release' },
      { label: 'Media Contact', to: '/news/media-contact' },
      { label: 'Blog', to: '/news/blog' }
    ]
  },
  {
    label: 'Gallery',
    to: '/gallery/photos',
    children: [
      { label: 'Photos', to: '/gallery/photos' },
      { label: 'Videos', to: '/gallery/videos' }
    ]
  },
  {
    label: 'Downloads',
    to: '/downloads/brochure',
    children: [
      { label: 'Brochure', to: '/downloads/brochure' },
      { label: 'Poster', to: '/downloads/poster' },
      { label: 'Books', to: '/downloads/books' },
      { label: 'Journal', to: '/downloads/journal' },
      { label: 'Report', to: '/downloads/report' },
      { label: 'Forms', to: '/downloads/forms' }
    ]
  },
  { label: 'Contact', to: '/contact' }
]

export const galleryPhotos = [
      { title: 'Community awareness activity', image: '/images/gallery/INTRODUCTION-IMAGE-768x469.jpg' },
      { title: 'Cancer education program', image: '/images/gallery/cancer-education-program.jpg' },
      { title: 'Community event', image: '/images/gallery/IMG_2577.jpg' },
      { title: 'Foundation outreach', image: '/images/gallery/IMG_2482-scaled.jpg' },
      { title: 'Screening awareness', image: '/images/gallery/e60c507e-bdeb-40ad-974f-d14e6561fb9f-e1687192809668-768x436.jpg' },
      { title: 'Community dialogue', image: '/images/gallery/e5c076d3-e365-47b7-9ba3-40dc84974de0-e1687192940907-768x436.jpg' },
      { title: 'Awareness campaign', image: '/images/gallery/6e91e301-cf9b-42fc-9169-e1e292583104-768x436.jpg' },
      { title: 'Event banner', image: '/images/gallery/banner-via-myagde3-1-scaled.jpg' },
      { title: 'Community gathering', image: '/images/gallery/IMG_6345.jpg' },
      { title: 'Field activity', image: '/images/gallery/DSC_5670-2-scaled.jpg' },
      { title: 'Foundation team', image: '/images/gallery/DSC_5686-1-scaled.jpg' },
      { title: 'Public health outreach', image: '/images/gallery/DSC_5762-1-scaled.jpg' },
      { title: 'Community partnership', image: '/images/gallery/DSC_5935-scaled.jpg' },
      { title: 'Awareness slide', image: '/images/gallery/slide-1-scaled.jpg' },
      { title: 'Program slide', image: '/images/gallery/slide-3-scaled.jpg' }
    ]

    export const galleryVideos = [
      {
        title: 'Television Talk Show on Tobacco Control',
        source: 'https://tumamcarefoundation.org.np/wp-content/uploads/2023/06/%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%9C%E0%A4%A8%E0%A5%8D%E0%A4%AF-%E0%A4%AA%E0%A4%A6%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%A5-%E0%A4%A8%E0%A4%BF%E0%A4%AF%E0%A4%A8%E0%A5%8D%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%A3-%E0%A4%90%E0%A4%A8-%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7-%E0%A4% भाग%E2%80%93%E0%A5%A7.mp4'
      },
      {
        title: 'Interaction Program on Tobacco Control',
        source: 'https://tumamcarefoundation.org.np/wp-content/uploads/2023/09/Interaction-on-Tobacco-Control.mp4'
      },
      {
        title: 'Community Conversation on Tobacco Control',
        source: 'https://tumamcarefoundation.org.np/wp-content/uploads/2023/09/Interaction-on-Tobacco-Control.mp4'
      }
    ]

    export const downloadItems = {
      brochure: { title: 'Brochure', type: 'PDF', icon: 'bi-file-earmark-pdf', image: '/images/gallery/INTRODUCTION-IMAGE-768x469.jpg' },
      poster: { title: 'Poster', type: 'Image', icon: 'bi-file-image', image: '/images/gallery/cancer-education-program.jpg' },
      books: { title: 'Books', type: 'PDF', icon: 'bi-file-earmark-pdf', image: '/images/gallery/IMG_2482-scaled.jpg' },
      journal: { title: 'Journal', type: 'PDF', icon: 'bi-file-earmark-pdf', image: '/images/gallery/e5c076d3-e365-47b7-9ba3-40dc84974de0-e1687192940907-768x436.jpg' },
      report: { title: 'Report', type: 'PDF', icon: 'bi-file-earmark-pdf', image: '/images/gallery/banner-via-myagde3-1-scaled.jpg' },
      forms: { title: 'Forms', type: 'PDF', icon: 'bi-file-earmark-pdf', image: '/images/gallery/IMG_2577.jpg' }
    }

export const impactCards = [
  {
    title: 'Cancer Awareness',
    description: 'Community education and outreach focused on prevention, early detection and risk reduction.'
  },
  {
    title: 'Early Detection',
    description: 'Supportive screening and referral pathways for women and vulnerable communities.'
  },
  {
    title: 'Screening Programs',
    description: 'Evidence-led screening activities designed to reach underserved populations. '
  },
  {
    title: 'Treatment Support',
    description: 'Practical support and community-based care coordination for patients and families.'
  }
]

export const homeServices = [
  { title: 'Cervical Cancer Screening', description: 'Promoting early screening, awareness and referral support for women.', image: '/images/home-services/cervical-screening.png' },
  { title: 'Breast Cancer Screening', description: 'Helping women access timely information, screening and compassionate guidance.', image: '/images/home-services/breast-screening.png' },
  { title: 'Prostate Cancer Screening', description: 'Encouraging men and families to understand risk, symptoms and timely care.', image: '/images/home-services/prostate-screening.png' },
  { title: 'Tobacco Control', description: 'Building healthier communities through tobacco prevention and public education.', image: '/images/home-services/tobacco-control.png' },
  { title: 'Patient Advocacy', description: 'Supporting patients and families with clear guidance and respectful care.', image: '/images/home-services/patient-advocacy.png' },
  { title: 'Research', description: 'Using evidence and learning to strengthen cancer prevention and support programs.', image: '/images/home-services/research.png' }
]

export const programCards = [
  {
    id: 'cervical-cancer',
    title: 'Cervical Cancer Screening & Awareness Program',
    shortDescription: 'Since its establishment, Tumamcare Foundation is running cervical cancer screening and awareness program.',
    description: 'The program promotes early detection and awareness for cervical cancer through screening, outreach, counselling and referral support for women in underserved communities.',
    image: '/images/e60c507e-bdeb-40ad-974f-d14e6561fb9f-e1687192809668-768x436.jpg',
    accent: 'pink'
  },
  {
    id: 'breast-cancer',
    title: 'Breast Cancer Screening & Awareness Program',
    shortDescription: 'The program focuses on screening, awareness and support for poor and needy women.',
    description: 'This initiative strengthens breast cancer awareness and provides screening opportunities for women who may not otherwise access timely care.',
    image: '/images/IMG_2577.jpg',
    accent: 'rose'
  },
  {
    id: 'tobacco-control',
    title: 'Tobacco Control & Awareness Program',
    shortDescription: 'The foundation works in partnership with public institutions to reduce tobacco-related harm.',
    description: 'The tobacco control initiative raises awareness, educates communities and supports prevention strategies in line with public health goals.',
    image: '/images/e5c076d3-e365-47b7-9ba3-40dc84974de0-e1687192940907-768x436.jpg',
    accent: 'green'
  }
]

export const whatWeDoCards = [
  {
    title: 'Cancer Prevention',
    description: 'Education and community input that reduces risk and supports healthier decisions.',
    image: '/images/what-we-do/cancer-prevention.png'
  },
  {
    title: 'Early Detection',
    description: 'Proactive screening and referral support to promote timely diagnosis and care.',
    image: '/images/what-we-do/early-detection.png'
  },
  {
    title: 'Cancer Awareness',
    description: 'Community outreach and campaigns that address stigma, misinformation and service gaps.',
    image: '/images/what-we-do/cancer-awareness.png'
  },
  {
    title: 'Treatment Support',
    description: 'Practical help for patients and families navigating diagnosis and treatment pathways.',
    image: '/images/what-we-do/treatment-support.png'
  },
  {
    title: 'Screening',
    description: 'Clinical and community-based screening initiatives designed for underserved groups.',
    image: '/images/what-we-do/screening.png'
  },
  {
    title: 'Tobacco Control',
    description: 'Public health action focused on reducing exposure and encouraging healthier communities.',
    image: '/images/what-we-do/tobacco-control.png'
  },
  {
    title: 'Community Outreach',
    description: 'Direct engagement with local communities, health workers and families.',
    image: '/images/what-we-do/community-outreach.png'
  },
  {
    title: 'Research',
    description: 'Evidence-informed programming and learning that strengthens the foundation’s mission.',
    image: '/images/what-we-do/research.png'
  }
]

export const teamGroups = [
  {
    title: 'Executive Committee',
    members: [
      { name: 'Ms. Lila Oli', role: 'President' },
      { name: 'Mr. Pralahad Pakuwal', role: 'Vice-President' },
      { name: 'Mr. RP Shiwakoti', role: 'General Secretary' },
      { name: 'Mr. Ram Prasad Pakuwal', role: 'Secretary' },
      { name: 'Ms. Januka Shiwakoti', role: 'Treasurer' },
      { name: 'Mr. Devi Prasad Shedain', role: 'Member' },
      { name: 'Mr. Sabitri Shiwakoti', role: 'Member' }
    ]
  },
  {
    title: 'Advisory Board',
    members: [
      { name: 'Prof. Dr. Bishnu Dutta Poudel', role: 'Advisor' },
      { name: 'Prof. Dr. Rajendra Prasad Baral', role: 'Advisor' },
      { name: 'Dr. Subodh Adhikari', role: 'Advisor' },
      { name: 'Dr. Sudip Shrestha', role: 'Advisor' },
      { name: 'Dr. Bishesh Paudel', role: 'Advisor' },
      { name: 'Dr. Ananta Shrestha', role: 'Advisor' },
      { name: 'Dr. Jitendra Pariyar', role: 'Advisor' },
      { name: 'Dr. Sher Bahadur Pun', role: 'Advisor' },
      { name: 'Mr. Thakin Kumar Gurung', role: 'Advisor' },
      { name: 'Mr. Rameshwar Khadka', role: 'Advisor' }
    ]
  },
  {
    title: 'Executive Leadership Team',
    members: [
      { name: 'Mr. UP Shiwakoti', role: 'Executive Director' },
      { name: 'Mr. Khagendra Yonghang', role: 'Director' },
      { name: 'Dr. Laxmi Prasad Ghimire', role: 'Project Lead' },
      { name: 'Dr. Saujanya Karmacharya', role: 'Consultant (Gynae Onco)' },
      { name: 'Ms. Shova Sharma', role: 'Nursing Incharge' },
      { name: 'Mr. Suman Tiwari', role: 'Program Coordinator' },
      { name: 'Ms. Gyanu Maharjan', role: 'Research Head' },
      { name: 'Mr. Anup Shiwakoti', role: 'Senior Accountant' },
      { name: 'Ms. Rushma Shrestha Koju', role: 'Data Registrar' },
      { name: 'Mr. Aakash Shiwakoti', role: 'International Coordinator' },
      { name: 'Mr. Shivahari Shiwakoti', role: 'Patient Advocate' }
    ]
  }
]

export const resourceCards = [
  { slug: 'breast-cancer', title: 'Breast Cancer', type: 'Brochure', description: 'Educational information on breast cancer awareness and prevention.', icon: 'bi-file-earmark-pdf' },
  { slug: 'cancer-nutrition', title: 'Cancer and Nutrition', type: 'Brochure', description: 'Guidance on healthy nutrition and supportive living during cancer care.', icon: 'bi-file-earmark-pdf' },
  { slug: 'cervical-cancer', title: 'Cervical Cancer', type: 'Brochure', description: 'Key information on screening, symptoms and early detection.', icon: 'bi-file-earmark-pdf' },
  { slug: 'tobacco-control', title: 'Tobacco Control', type: 'Brochure', description: 'Awareness content on tobacco harm reduction and prevention.', icon: 'bi-file-earmark-pdf' },
  { slug: 'tumamcare-introduction', title: 'TUMAMCARE Introduction', type: 'Information', description: 'Overview of the foundation, mission and community outreach.', icon: 'bi-file-earmark-text' },
  { slug: 'what-is-cancer', title: 'What is Cancer?', type: 'Education', description: 'Clear explanations of cancer basics and common risk factors.', icon: 'bi-file-earmark-text' }
]

export const newsCards = [
  {
    slug: 'community-health-screening-initiative',
    category: 'Community Health',
    title: 'Community health screening initiative for early identification and awareness',
    excerpt: 'The foundation continues to strengthen outreach, education and trust-building in local communities.',
    image: '/images/cancer-education-program.jpg',
    date: '12 September 2026',
    readTime: '4 min read',
    body: 'Tumamcare continues to promote early identification through community education, screening awareness and referral guidance. These activities help families understand when to seek care and where to find trusted support.'
  },
  {
    slug: 'tobacco-control-awareness-drive',
    category: 'Awareness',
    title: 'Tobacco control awareness drive supports health education and prevention',
    excerpt: 'Awareness activities help communities address behavioural risk and improve early prevention.',
    image: '/images/IMG_2482-scaled.jpg',
    date: '05 September 2026',
    readTime: '3 min read',
    body: 'Through tobacco-control education, the foundation works with communities and public-health partners to explain the harms of tobacco and encourage healthier choices.'
  },
  {
    slug: 'screening-program-community-dialogue',
    category: 'Screening Program',
    title: 'Screening program dialogue builds stronger community participation',
    excerpt: 'Public engagement is a key part of the foundation’s screening and education approach.',
    image: '/images/banner-via-myagde3-1-scaled.jpg',
    date: '28 August 2026',
    readTime: '5 min read',
    body: 'Community dialogue helps screening programs respond to real concerns, reduce hesitation and connect people with practical information about early detection.'
  },
  {
    slug: 'tumamcare-community-partnerships',
    category: 'Foundation Update',
    title: 'Community partnerships strengthen cancer awareness in Nepal',
    excerpt: 'Local collaboration helps bring reliable cancer information and support closer to families.',
    image: '/images/IMG_2577.jpg',
    date: '18 August 2026',
    readTime: '4 min read',
    body: 'The foundation values collaboration with communities, health workers and public institutions. Together, partners can make prevention, screening and support more accessible.'
  },
  {
    slug: 'compassionate-support-for-families',
    category: 'Patient Support',
    title: 'Compassionate support helps families navigate cancer care',
    excerpt: 'Practical guidance and respectful communication remain central to patient and family support.',
    image: '/images/INTRODUCTION-IMAGE-768x469.jpg',
    date: '08 August 2026',
    readTime: '3 min read',
    body: 'Cancer affects more than a diagnosis. Tumamcare promotes compassionate guidance, referral connections and clear communication so families can make informed decisions.'
  },
  {
    slug: 'volunteers-extend-the-circle-of-care',
    category: 'Volunteer Stories',
    title: 'Volunteers extend the circle of care in every community',
    excerpt: 'Dedicated volunteers help turn cancer awareness into trusted conversations, practical guidance and compassionate action.',
    image: '/images/gallery/DSC_5686-1-scaled.jpg',
    date: '01 August 2026',
    readTime: '4 min read',
    body: 'Volunteers are an important bridge between the foundation and the communities it serves. Their time, empathy and local knowledge help more people access reliable information, screening guidance and support.'
  }
]

export const blogCards = [
  {
    slug: 'why-early-detection-matters',
    category: 'Cancer Education',
    title: 'Why early detection matters in cancer care',
    excerpt: 'Understanding warning signs and screening can help people take action sooner.',
    image: '/images/e60c507e-bdeb-40ad-974f-d14e6561fb9f-e1687192809668-768x436.jpg',
    date: '10 September 2026',
    readTime: '5 min read',
    body: 'Early detection can create more options for care and support. Learning about symptoms, screening recommendations and referral pathways is an important part of community health.'
  },
  {
    slug: 'cancer-awareness-starts-at-home',
    category: 'Community Health',
    title: 'Cancer awareness starts with conversations at home',
    excerpt: 'Simple, respectful conversations can reduce fear and help families share reliable health information.',
    image: '/images/cancer-education-program.jpg',
    date: '02 September 2026',
    readTime: '4 min read',
    body: 'Awareness grows when families discuss prevention, healthy choices and timely care without stigma. Every informed conversation can help someone feel more confident about seeking support.'
  },
  {
    slug: 'supporting-women-through-screening',
    category: 'Screening',
    title: 'Supporting women through cervical and breast screening',
    excerpt: 'Community-based screening and clear guidance can help women access preventive care.',
    image: '/images/IMG_2577.jpg',
    date: '25 August 2026',
    readTime: '6 min read',
    body: 'Screening programs work best when they are accessible, respectful and supported by clear referral information. Tumamcare focuses on reaching women who may face barriers to timely care.'
  },
  {
    slug: 'building-tobacco-free-communities',
    category: 'Tobacco Control',
    title: 'Building healthier, tobacco-free communities together',
    excerpt: 'Education and community action are powerful tools for reducing tobacco-related harm.',
    image: '/images/IMG_2482-scaled.jpg',
    date: '16 August 2026',
    readTime: '4 min read',
    body: 'Tobacco control is a shared responsibility. Community education, supportive conversations and strong public-health partnerships can help people protect their health.'
  }
]

export const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Our Team', to: '/our-team' },
  { label: 'News', to: '/news' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' }
]

export const programHighlights = [
  'Cancer awareness and prevention education',
  'Screening and referral services for women',
  'Community outreach and counselling support',
  'Partnership with public health stakeholders'
]

export const donationMessage = 'Together, we can make a difference by supporting awareness, screening and compassionate care.'
