import { NuxtCookies } from 'cookie-universal-nuxt/types'

declare module '@nuxt/types' {
  interface Vue {
    $cookies: NuxtCookies
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $cookies: NuxtCookies
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $cookies: NuxtCookies
  }
}
