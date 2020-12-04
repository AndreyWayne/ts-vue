import pluginAPI, { getBaseUrl, plugin } from './api'

const OLD_ENV = process.env

beforeEach(() => {
  jest.resetModules()
  process.env = { ...OLD_ENV }
})

afterEach(() => {
  process.env = OLD_ENV
})

describe('API', () => {
  it('should export a function by default', () => {
    expect(typeof pluginAPI).toBe('function')
  })

  it('should execute inject function', () => {
    const inject = jest.fn()

    pluginAPI(undefined, inject)
    expect(inject).toHaveBeenCalled()
  })

  it('should not execute inject if not a function', () => {
    const inject = {} as Function
    pluginAPI(undefined, inject)
  })

  describe('getBaseUrl', () => {
    it('should return a mock url', async () => {
      process.env.MOCK = 'true'

      const { getBaseUrl } = await import('./api')

      const req = {
        headers: {
          host: 'localhost:8080'
        }
      }

      const baseUrl = getBaseUrl(req as any)
      expect(baseUrl).toBe(`http://${req.headers.host}/api`)
    })

    it('should return default API url', () => {
      const baseUrl = getBaseUrl()
      expect(baseUrl).toBe(plugin.baseUrl)
    })
  })
})
