import pluginDayjs from './dayjs'

describe('DayJS', () => {
  it('should export a function by default', () => {
    expect(typeof pluginDayjs).toBe('function')
  })

  it('should execute inject function', () => {
    const inject = jest.fn()

    pluginDayjs(null, inject)
    expect(inject).toHaveBeenCalled()
  })

  it('should not execute inject if not a function', () => {
    const inject = {} as Function
    pluginDayjs(null, inject)
  })
})
