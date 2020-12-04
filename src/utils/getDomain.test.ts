import { getDomain } from './getDomain'

beforeEach(() => {
  // @ts-ignore
  process.client = false

  delete window.location
})

describe('getDomain', () => {
  it('should return from window location', () => {
    // @ts-ignore
    process.client = true

    const url = new URL('http://localhost:8080')
    window.location = url as any

    const domain = getDomain()
    expect(domain).toBe(url.origin)
  })

  it('should return an empty string', () => {
    // @ts-ignore
    process.client = true

    const domain = getDomain()
    expect(domain).toBe('')
  })

  it('should return from host with http', () => {
    // @ts-ignore
    process.client = false

    const req = {
      headers: {
        host: 'localhost:8080'
      }
    }

    const domain = getDomain(req as any)
    expect(domain).toBe(`http://${req.headers.host}`)
  })

  it('should return from host with https', () => {
    // @ts-ignore
    process.client = false

    const req = {
      headers: {
        host: 'site.ru:8080'
      }
    }

    const domain = getDomain(req as any)
    expect(domain).toBe(`https://${req.headers.host}`)
  })
})
