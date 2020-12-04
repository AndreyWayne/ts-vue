import { IncomingMessage } from 'http'

import { Api } from '@cybersport/specifications'
import { Context } from '@nuxt/types'

import { getDomain } from '@/utils'

const api = new Api()
api.baseUrl = getBaseUrl()

export function getBaseUrl (req?: IncomingMessage) {
  const apiPath = 'api'

  if (req) {
    return `http://localhost:8080/${apiPath}`
  }

  return `${getDomain()}/${apiPath}`
}

export const plugin = api

export default function (ctx?: Context, inject?: Function) {
  api.baseUrl = getBaseUrl(ctx?.req)

  if (typeof inject === 'function') {
    inject('api', api)
  }
}
