import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import 'dayjs/locale/ru'

// Add relative time plugin.
dayjs.extend(relativeTime)

// Use "ru" locale.
dayjs.locale('ru')

/**
 * Extended dayjs.
 * @const
 */
export const plugin = dayjs

export default function (_: any, inject?: Function) {
  if (typeof inject === 'function') {
    inject('dayjs', plugin)
  }
}
