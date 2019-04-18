module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Mueller Report', // Navigation and Site Title
  siteTitleAlt: 'In case the DOJ are running slow.', // Alternative Site title for SEO
  siteTitleShort: 'Report', // short_name for manifest
  siteHeadline: 'Publishing research faster for the people.', // Headline for schema.org JSONLD
  siteUrl: 'https://fastreport.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'A text analysis of the Mueller report published April 18, 2019.',
  author: 'Alex Welcing', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@alexwelcing', // Twitter Username
  ogSiteName: 'alexwelcing', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: '#',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/lekoarts.png',
  name: 'Alex Welcing',
  location: 'NYC',
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
