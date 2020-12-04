import { Context } from '@nuxt/types'
import { Store } from 'vuex'

export const actions = {
  /**
   * Dispatches automatically on first request.
   * (Server-side only).
   */
  async nuxtServerInit (_: Store<any>, context: Context): Promise<void> {
    const modules = Object.values(context.app.$modules)

    for (const storeModule of modules) {
      const { nuxtServerInit } = storeModule

      if (typeof nuxtServerInit === 'function') {
        await nuxtServerInit(context)
      }
    }
  }
}
