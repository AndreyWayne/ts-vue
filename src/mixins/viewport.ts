import Vue from 'vue'
import { BREAKPOINTS } from '@/store/viewport'

/**
 * Generates a Set of queries from breakpoints.
 *
 * @param breakpoints An object of breakpoints.
 *
 * @return A Set of queries.
 */
export function generateQueries (breakpoints: typeof BREAKPOINTS) {
  // Sort entries in ascending order based on size.
  const entries = Object.entries(breakpoints).sort(([, a], [, b]) => a - b)

  // Create a Set.
  const set = new Set()

  // Define i as entries length to loop faster.
  let i = entries.length

  while (i--) {
    const [ref, currentWidth] = entries[i]
    const [nextKey, nextWidth] = entries[i + 1] || []

    let mediaQuery = ''

    if (i > 0) {
      mediaQuery = `(min-width: ${currentWidth}px)`
    } else {
      mediaQuery = '(min-width: 1px)'
    }

    if (nextKey) {
      mediaQuery += ` and (max-width: ${nextWidth - 1}px)`
    }

    set.add({ mediaQuery, ref })
  }

  return set
}

export const ViewportMixin = Vue.extend({
  async mounted () {
    // Create queries from breakpoints.
    const queries = generateQueries(BREAKPOINTS)

    // Async import a module.
    const { default: MQS } = await import('mediaquerysensor')

    // Cache setBreakpoint method.
    const { setBreakpoint } = this.$modules.viewport

    // Loop over each query.
    queries.forEach(({ ref, mediaQuery }: any) => {
      // Add query to MQS.
      MQS.add({
        action: setBreakpoint.bind(null, ref),

        mediaQuery,
        ref
      })
    })
  }
})
