import { Modules } from '@/plugins/modules'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $modules: Modules
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $modules: Modules
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $modules: Modules
  }
}
