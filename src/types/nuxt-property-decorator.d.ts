import { Store } from 'vuex/types'

declare module 'nuxt-property-decorator' {
  interface VuexModule {
    store: Store<any>
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    store: Store<S>
  }
}
