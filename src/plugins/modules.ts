import { Context } from '@nuxt/types'
import { getModule } from 'nuxt-property-decorator'

import { Store } from 'vuex'
import Viewport from '@/store/viewport'

/**
 * Store modules.
 */
export interface Modules {
  viewport: Viewport
}

/**
 * Returns an object of unregistered modules.
 */
export function getModules () {
  return {
    viewport: Viewport as any
  } as Modules
}

/**
 * Returns an object of modules.
 * @param store - Vuex Store.
 */
export function getStoreModules (store: Store<any>) {
  return {
    viewport: getModule(Viewport, store)
  } as Modules
}

export default function (context: Context, inject?: Function) {
  const { store } = context

  if (!store) {
    return
  }

  const modules: Modules = getStoreModules(store)

  if (typeof inject === 'function') {
    inject('modules', modules)
  }
}
