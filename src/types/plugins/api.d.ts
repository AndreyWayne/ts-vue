import { plugin } from '@/plugins/api'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $api: typeof plugin
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: typeof plugin
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: typeof plugin
  }
}
