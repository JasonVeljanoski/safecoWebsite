const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/vue-scrollto'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,700,800' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Herr+Von+Muellerhoff" },
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Crimson+Text"},
      //{ rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.4/css/bulma.min.css" }, // form styling
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#1171ba' 
  },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    '~plugins/directives.js', 
    { src: '~plugins/vue-carousel.js', ssr: false },
    '@/plugins/validate'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
