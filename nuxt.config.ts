import 'isomorphic-fetch'

import { Configuration } from '@nuxt/types'
import { Configuration as WebpackConfiguration } from 'webpack'

import { createMeta, getScopedName } from './src/utils'

/**
 * Generate meta tags.
 */
export const { meta: defaultMeta, title: defaultTitle } = createMeta({
  description:
    'Новости и репортажи из мира киберспорта. Турниры, расписание матчей, рейтинги команд и игроков. Записи игр, видеообзоры, стримы, гайды. Блогосфера.',

  title:
    'Cybersport.ru - портал о киберспорте, новости, репортажи, турниры, расписание матчей, рейтинги команд и игроков',

  withTitleTemplate: false
})

const {
  /**
   * Server host.
   * @const
   */
  HOST = '0.0.0.0',

  /**
   * Should mock?
   */
  MOCK = 'false',

  /**
   * Current environment.
   * @const
   */
  NODE_ENV,

  /**
   * Server port.
   * @const
   */
  PORT = '8080'
} = process.env

/**
 * Detect if current node environment is production.
 */
const isProduction = NODE_ENV === 'production'

export default {
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  /**
   * Build options.
   * @see {@link https://nuxtjs.org/api/configuration-build}
   */
  build: {
    /**
     * Babel options.
     * @see {@link https://nuxtjs.org/api/configuration-build/#babel}
     */
    babel: {
      /**
       * Presets options.
       * @see {@link https://nuxtjs.org/api/configuration-build/#presets}
       */
      presets ({ isServer }) {
        const preset = require.resolve('@nuxt/babel-preset-app')

        const options = {
          buildTarget: isServer ? 'server' : 'client',

          corejs: {
            version: 3
          }
        }

        return [[preset, options]]
      }
    },

    /**
     * Enables CSS Source Map support
     * @see {@link https://nuxtjs.org/api/configuration-build/#csssourcemap}
     */
    cssSourceMap: false,

    /**
     * Extend webpack configuration.
     * @see {@link https://nuxtjs.org/api/configuration-build/#extend}
     */
    extend (config: WebpackConfiguration) {
      /**
       * Remove SVG Rules.
       */
      // @ts-ignore
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      // @ts-ignore
      svgRule.test = /\.(png|jpe?g|gif|webp|avif)$/

      /**
       * Use 'vue-svg-loader' for SVG.
       * @see {@link https://github.com/visualfanatic/vue-svg-loader}
       */
      // @ts-ignore
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',

        options: {
          /**
           * SVGO.
           * @see {@link https://github.com/svg/svgo#what-it-can-do}
           */
          svgo: {
            plugins: [
              {
                cleanupIDs: {
                  remove: true
                }
              },
              {
                removeAttrs: {}
              },
              {
                removeComments: true
              },
              {
                removeDesc: true
              },
              {
                convertShapeToPath: true
              },
              {
                removeStyleElement: true
              },
              {
                removeTitle: true
              },
              {
                removeUselessDefs: true
              },
              {
                removeViewBox: false
              }
            ]
          }
        }
      })
    },

    /**
     * Extract CSS.
     * @see {@link https://nuxtjs.org/api/configuration-build/#extractcss}
     */
    extractCSS: isProduction,

    /**
     * Loaders options.
     * @see {@link https://nuxtjs.org/api/configuration-build#loaders}
     */
    loaders: {
      /**
       * CSS Modules.
       * @see {@link https://github.com/css-modules/css-modules}
       */
      cssModules: {
        modules: {
          getLocalIdent (context: any, _, localName) {
            return isProduction ? getScopedName(localName, context.resourcePath as string) : ''
          },

          localIdentName: '[path][name]__[local]'
        }
      }
    },

    /**
     * Assets path.
     * @see {@link https://nuxtjs.org/api/configuration-build/#publicpath}
     */
    publicPath: '/assets',

    /**
     * PostCSS options.
     * @see {@link https://nuxtjs.org/api/configuration-build/#postcss}
     */
    postcss: {
      plugins: {
        /**
         * Convert PX to REM.
         * @see {@link https://github.com/cuth/postcss-pxtorem}
         */
        'postcss-pxtorem': isProduction && { propList: ['*'] }
      }
    }
  },

  /**
   * Development-only modules.
   * @see {@link https://nuxtjs.org/api/configuration-modules#-code-buildmodules-code-}
   */
  buildModules: [
    /**
     * TypeScript support.
     * @see {@link https://github.com/nuxt/typescript}
     */
    '@nuxt/typescript-build',

    /**
     * Color mode.
     * @see {@link https://github.com/nuxt-community/color-mode-module}
     */
    '@nuxtjs/color-mode',

    /**
     * Detect device type.
     * @see {@link https://github.com/nuxt-community/device-module}
     */
    '@nuxtjs/device',

    /**
     * Shared resources without imports.
     * @see {@link https://github.com/nuxt-community/style-resources-module}
     */
    '@nuxtjs/style-resources',

    /**
     * Stylelint support.
     * @see {@link https://github.com/nuxt-community/stylelint-module}
     */
    '@nuxtjs/stylelint-module'
  ],

  /**
   * Global CSS.
   * @see {@link https://nuxtjs.org/api/configuration-css}
   */
  css: [
    /**
     * Normalize CSS.
     * @see {@link https://github.com/necolas/normalize.css}
     */
    'normalize.css/normalize.css',

    /**
     * Application global styles.
     */
    '@/assets/styles/global.scss'
  ],

  /**
   * Environment variables.
   * @see {@link https://nuxtjs.org/api/configuration-env/}
   */
  env: {
    MOCK,
    API_URL: process.env.API_URL || 'https://cybermain-test.esforce.net/api/'
  },

  /**
   * Application Headers.
   * @see {@link https://nuxtjs.org/api/configuration-head}
   */
  head: {
    /**
     * HTML Attributes.
     * @see {@link https://vue-meta.nuxtjs.org/api/#htmlattrs}
     */
    htmlAttrs: {
      lang: 'ru'
    },

    /**
     * Meta.
     * @see {@link https://vue-meta.nuxtjs.org/api/#metainfo-properties}
     */
    meta: [
      /**
       * Default charset.
       */
      {
        charset: 'utf-8'
      },

      /**
       * Default viewport.
       */
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport'
      },

      /**
       * Default meta.
       */
      ...defaultMeta
    ],

    /**
     * Default title.
     */
    title: defaultTitle
  },

  /**
   * Build for modern browsers.
   * @see {@link https://nuxtjs.org/api/configuration-modern}
   */
  modern: isProduction,

  /**
   * Modules.
   * @see {@link https://nuxtjs.org/api/configuration-modules}
   */
  modules: [
    /**
     * Cookie manager.
     * @see {@link https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt}
     */
    'cookie-universal-nuxt',
    '@nuxtjs/axios'
  ],

  /**
   * Plugins.
   * @see {@link https://nuxtjs.org/api/configuration-plugins}
   */
  plugins: [
    /**
     * API wrapper from "@cybersport/specifications".
     */
    '@/plugins/api',

    /**
     * Day.js.
     * @see {@link https://github.com/iamkun/dayjs}
     */
    '@/plugins/dayjs',

    /**
     * Store modules.
     */
    '@/plugins/modules',

    /**
     * Pluralize.
     * @see {@link https://github.com/megatolya/plural-ru}
     */
    '@/plugins/dayjs',

    /**
     * Access icons from a global component "svgicon".
     */
    '@/plugins/svgicon'
  ],

  /**
   * Render configuration.
   * @see {@link https://nuxtjs.org/api/configuration-render}
   */
  render: {
    /**
     * HTTP2 Headers.
     * @see {@link https://nuxtjs.org/api/configuration-render/#http2}
     */
    http2: {
      push: true
    }
  },

  /**
   * Router configuration.
   * @see {@link https://nuxtjs.org/api/configuration-router/}
   */
  router: {
    linkActiveClass: '',
    linkExactActiveClass: '',
    linkPrefetchedClass: ''
  },

  /**
   * Source directory.
   * @see {@link https://nuxtjs.org/api/configuration-srcdir}
   */
  srcDir: 'src',

  /**
   * Server options.
   * @see {@link https://nuxtjs.org/api/configuration-server}
   */
  server: {
    host: HOST,
    port: Number(PORT)
  },

  serverMiddleware: [
    /**
     * API Server mock.
     */
    MOCK && { handler: '@/middlewares/server/mock', path: '/api' }
  ],

  /**
   * "@nuxtjs/style-resources" options.
   * @see {@link https://github.com/nuxt-community/style-resources-module}
   */
  styleResources: {
    scss: ['@/assets/styles/shared/_index.scss']
  }
} as Configuration
