import { IncomingMessage } from 'http'

/**
 * Returns current domain.
 *
 * @param req - HTTP Request.
 */
export function getDomain (req?: IncomingMessage) {
  const requestHost = req?.headers?.host || ''
  const localServer = requestHost.includes('localhost') || requestHost.includes('192.168')
  const protocol = localServer ? 'http' : 'https'

  if (process.client) {
    return window?.location?.origin || ''
  }

  const { origin = '' } = requestHost ? new URL(`${protocol}://${requestHost}`) : {}
  return origin
}
