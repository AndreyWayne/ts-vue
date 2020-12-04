import pluginPluralize from './pluralize'

describe('DayJS', () => {
  it('should export a function by default', () => {
    expect(typeof pluginPluralize).toBe('function')
  })

  it('should execute inject function', () => {
    const inject = jest.fn()

    pluginPluralize(null, inject)
    expect(inject).toHaveBeenCalled()
  })

  it('should not execute inject if not a function', () => {
    const inject = {} as Function
    pluginPluralize(null, inject)
  })
})
