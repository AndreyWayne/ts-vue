import { plugin } from '@/plugins/pluralize'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $pluralize: typeof plugin
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $pluralize: typeof plugin
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $pluralize: typeof plugin
  }
}
