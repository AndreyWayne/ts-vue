import { createUniqueIdGenerator, getScopedName } from './getScopedName'

describe('createUniqueIdGenerator', () => {
  it('should return a generator function', () => {
    const generator = createUniqueIdGenerator()
    expect(typeof generator).toBe('function')
  })

  it('should return an unique letter from string', () => {
    const generator = createUniqueIdGenerator()
    const string = 'foo'

    const letter = generator(string)
    const letterTwo = generator(string)

    expect(typeof letter).toBe('string')
    expect(letterTwo).toBe(letter)
  })
})

describe('getScopedName', () => {
  it('should return a class name without localName & resourcePath', () => {
    const localName = 'foo'
    const resourcePath = 'src/components/Foo'

    const className = getScopedName(localName, resourcePath)
    const regex = new RegExp(`(${localName}|${resourcePath})`, 'i')

    expect(className).toBeTruthy()
    expect(className).not.toMatch(regex)
  })

  it('should return type first letter', () => {
    const localName = 'foo'
    const resourcePath = 'src/components/Foo'

    const className = getScopedName(localName, resourcePath)
    expect(className).toBe('c-ab')
  })

  it('should return a localId if type found', () => {
    const localName = 'foo'
    const resourcePath = 'src/component/Foo'

    const className = getScopedName(localName, resourcePath)
    expect(className).toBe('cb')
  })
})
