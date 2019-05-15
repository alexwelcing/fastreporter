module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Content Updates', // Navigation and Site Title
  siteTitleAlt: 'Really fast updating on project status until complete..', // Alternative Site title for SEO
  siteTitleShort: 'ContentUp', // short_name for manifest
  siteHeadline: 'Publishing research faster for the people.', // Headline for schema.org JSONLD
  siteUrl: 'https://fastreport.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Project tracker for the team.',
  author: 'Alex Welcing', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alexwelcing', // Twitter Username
  ogSiteName: 'alexwelcing', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: '#',

  // Manifest and Progress color
  themeColor: '#40bfe8',
  backgroundColor: '#002a38',

  // Your information
  avatar: '/logos/lekoarts.png',
  name: 'Project Updates',
  location: 'Greetings from NYC',
  socialMedia: [
    {
      url: 'https://twitter.com/alexwelcing',
      name: 'Twitter',
    },
    {
      url: 'https://www.atrispina.com',
      name: 'Homepage',
    },
  ],
}
