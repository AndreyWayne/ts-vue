import { plugin } from '@/plugins/dayjs'

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $dayjs: typeof plugin
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $dayjs: typeof plugin
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $dayjs: typeof plugin
  }
}
