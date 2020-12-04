import { createMeta } from './createMeta'

describe('createMeta', () => {
  it('should return keywords, meta & title', () => {
    const { keywords, meta, title } = createMeta()

    expect(Array.isArray(keywords)).toBeTruthy()
    expect(Array.isArray(meta)).toBeTruthy()
    expect(typeof title).toBe('string')
  })

  it('should return keywords as options', () => {
    const keywords = ['foo', 'bar']

    const { keywords: metaKeywords } = createMeta({ keywords })
    expect(metaKeywords).toEqual(keywords)
  })

  it('should return generated keywords from description', () => {
    const description = 'foo bar'

    const { keywords } = createMeta({ description })
    expect(keywords).toEqual(description.split(' '))
  })

  it('should return title with template', () => {
    const title = 'foo'
    const titleTemplate = 'bar'

    const { title: metaTitle } = createMeta({ title, titleTemplate, withTitleTemplate: true })
    expect(metaTitle).toBe(`${title} | ${titleTemplate}`)
  })

  it('should return title without template', () => {
    const title = 'foo'
    const titleTemplate = 'bar'

    const { title: metaTitle } = createMeta({ title, titleTemplate, withTitleTemplate: false })
    expect(metaTitle).toBe(title)
  })
})
