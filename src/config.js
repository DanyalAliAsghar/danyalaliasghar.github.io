module.exports = {
  siteTitle: 'Danyal Ali Asghar',
  siteDescription:
    'Danyal Ali Asghar is a Senior AI Engineer specializing in LLM-based extraction, RAG pipelines, Azure AI services, and scalable cloud data systems.',
  siteKeywords:
    'Danyal Ali Asghar, senior AI engineer, machine learning, LLM, RAG, Azure AI, Python, data engineering, NLP, prompt engineering',
  siteUrl: 'https://danyalaliasghar.github.io/',
  siteLanguage: 'en_US',
  // googleAnalyticsID: '',
  // googleVerification: '',
  name: 'Danyal Ali Asghar',
  location: 'Karachi, Pakistan',
  email: 'danyal.aliasghar@gmail.com',
  github: 'https://github.com/DanyalAliAsghar',
  twitterHandle: '@DanyalAliAsghar',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/DanyalAliAsghar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/danyal-aliasghar/',
    },
    // {
    //   name: 'Kaggle',
    //   url: 'https://www.kaggle.com/danyalaliasghar',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/danyal.aliasghar/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/DanyalAliAsghar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'AI Projects',
      url: '/#ai-projects',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
