const Dotenv = require('dotenv-webpack')

module.exports = {
  title: 'Memorundum',
  theme: '@vuepress/theme-blog',
  // head: [
  //   ['script', { src: './util.js' }]
  // ],
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'title',
          dirname: '_posts',
          path: '/blog/',
          itemPermalink: '/post/:year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 10
          }
        }
      ],
      frontmatters: [
        {
          id: 'tag',
          keys: ['tag'],
          path: '/tag/',
          scopeLayout: 'Tag'
        }
      ]
    }],
    ['vuepress-plugin-mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times',
      }
    }]
  ],
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  },
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Portfolio',
        link: '/portfolio/',
      },
      {
        text: 'Til',
        link: '/til/',
      }
    ]
  },
}