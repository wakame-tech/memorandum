module.exports = {
  title: 'Memorundum',
  theme: '@vuepress/theme-blog',
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/blog/',
          itemPermalink: '/post/:year/:month/:day/:slug',
          pagination: {
            lengthPerPage: 5
          }
        }
      ],
      // frontmatters: [
      //   {
      //     id: 'tag',
      //     keys: ['tag'],
      //     path: '/tag/',
      //     scopeLayout: 'Tag'
      //   }
      // ]
    }],
    ['vuepress-plugin-mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times',
      }
    }]
  ],
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