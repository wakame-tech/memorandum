const { config } = require('dotenv')

config()

module.exports = {
  title: 'Memorandum',
  description: 'ブログのようなポートフォリオのような何か',
  theme: require.resolve('./../../portfolio-theme'),
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-typescript'],
    ['@vuepress/google-analytics',
      {
        'ga': 'UA-149255712-1'
      }
    ]
  ],
  defaultPages: {
    home: true,
    posts: true,
  },
  locales: {
    '/': {
      lang: 'ja-JP'
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/jpg', href: 'img/favicon.jpg' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' }],
  ],
  themeConfig: {
    about: {
      title: 'Memorandum',
      nickname: 'wakame-tech',
      bio: 'Doing Nothing',
      avatar: 'https://images.ctfassets.net/ix7hhkbnjvh0/26vx1m8aWl3m7q9Tyfblbj/35e526d9fe6bc4f20b4fd16bd2794831/mel.jpg',
      sns: {
        github: 'https://github.com/wakame-tech',
        twitter: 'https://twitter.com/wakame_tech',
      },
    },
    perPage: 50,
    contentful: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      token: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
    },
    scrapbox: {
      url: 'https://scrapbox.io/api/pages/wakame-memorundum'
    },
    nav: [
      {
        text: 'Blog',
        icon: 'fas fa-file-alt',
        link: '/',
      },
      {
        text: 'Works',
        icon: 'fas fa-images',
        link: '/works/',
      },
      {
        text: 'Other',
        icon: 'fas fa-fire',
        link: '/other/',
      },
    ],
  }
}