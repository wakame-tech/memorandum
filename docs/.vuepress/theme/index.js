const webpack = require('webpack')

module.exports = (opts, ctx) => {
  const options = {
    name: 'portfolio-theme',
    plugins: [
      ['@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            pagination: {
              lengthPerPage: opts.perPage || 50,
            },
          },
        ],
      }],
      ['vuepress-plugin-typescript'],
      ['vuepress-plugin-mathjax', {
        target: 'svg'
      }],
      [ 'feed',
        {
          canonical_base: opts.base,
        }
      ],
      // for OGP
      [ 'autometa', {
        image: false,
        canonical_base: opts.base,
      }],
      ['vuepress-plugin-typescript'],
    ],
    enhanceAppFiles: ['./enhanceApp.js'],
  }

  return options
}