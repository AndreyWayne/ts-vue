import pluralize from 'plural-ru'

/**
 * Pluralize.
 * @const
 */
export const plugin = pluralize

export default function (_: any, inject?: Function) {
  if (typeof inject === 'function') {
    inject('pluralize', plugin)
  }
}
