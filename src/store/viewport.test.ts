import { getModule } from 'nuxt-property-decorator'

import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import Viewport, { Breakpoint } from './viewport'

Vue.use(Vuex)

let store: any
let viewport: Viewport

beforeEach(() => {
  store = new Store({
    modules: {
      viewport: Viewport
    }
  }) as any

  store.$device = {}

  viewport = getModule(Viewport, store)
})

describe('Viewport', () => {
  test('get isDesktop', () => {
    viewport.setBreakpoint('desktop')
    expect(viewport.isDesktop).toBeTruthy()
  })

  test('get isDesktopMedium', () => {
    viewport.setBreakpoint('desktopMedium')
    expect(viewport.isDesktopMedium).toBeTruthy()
  })

  test('get isDesktopOrHigher', () => {
    viewport.setBreakpoint('desktopMedium')
    expect(viewport.isDesktopOrHigher).toBeTruthy()

    viewport.setBreakpoint('desktop')
    expect(viewport.isDesktopOrHigher).toBeTruthy()

    viewport.setBreakpoint('desktopWide')
    expect(viewport.isDesktopOrHigher).toBeTruthy()
  })

  test('get isDesktopWide', () => {
    viewport.setBreakpoint('desktopWide')
    expect(viewport.isDesktopWide).toBeTruthy()
  })

  test('get isMobile', () => {
    viewport.setBreakpoint('mobile')
    expect(viewport.isMobile).toBeTruthy()
  })

  test('get isMobileMedium', () => {
    viewport.setBreakpoint('mobileMedium')
    expect(viewport.isMobileMedium).toBeTruthy()
  })

  test('get isMobileWide', () => {
    viewport.setBreakpoint('mobileWide')
    expect(viewport.isMobileWide).toBeTruthy()
  })

  test('get isMobileOrTablet', () => {
    viewport.setBreakpoint('mobile')
    expect(viewport.isMobileOrTablet).toBeTruthy()

    viewport.setBreakpoint('mobileMedium')
    expect(viewport.isMobileOrTablet).toBeTruthy()

    viewport.setBreakpoint('mobileWide')
    expect(viewport.isMobileOrTablet).toBeTruthy()

    viewport.setBreakpoint('tablet')
    expect(viewport.isMobileOrTablet).toBeTruthy()
  })

  test('get isTablet', () => {
    viewport.setBreakpoint('tablet')
    expect(viewport.isTablet).toBeTruthy()
  })

  test('get isTabletOrHigher', () => {
    viewport.setBreakpoint('tablet')
    expect(viewport.isTabletOrHigher).toBeTruthy()

    viewport.setBreakpoint('desktop')
    expect(viewport.isTabletOrHigher).toBeTruthy()

    viewport.setBreakpoint('desktopMedium')
    expect(viewport.isTabletOrHigher).toBeTruthy()

    viewport.setBreakpoint('desktopWide')
    expect(viewport.isTabletOrHigher).toBeTruthy()
  })

  describe('nuxtServerInit', () => {
    it('should get breakpoint from User-Agent', () => {
      const spy = jest.spyOn(viewport, 'setBreakpoint')

      store.$device.isMobile = true
      viewport.nuxtServerInit()

      expect(viewport.breakpoint).toBe('mobile')

      store.$device.isMobile = false
      store.$device.isTablet = true
      viewport.nuxtServerInit()

      expect(viewport.breakpoint).toBe('tablet')

      store.$device.isMobile = false
      store.$device.isTablet = false
      viewport.nuxtServerInit()

      expect(viewport.breakpoint).toBe('desktop')

      expect(spy).toBeCalledWith('mobile')
      expect(spy).toBeCalledWith('tablet')
      expect(spy).toBeCalledWith('desktop')
    })
  })

  describe('setBreakpoint', () => {
    it('should error if breakpoint is not valid', () => {
      const newBreakpoint = 'foo' as Breakpoint
      const spyError = jest.spyOn(console, 'error')

      viewport.setBreakpoint(newBreakpoint)

      expect(spyError).toBeCalled()
      expect(viewport.breakpoint).not.toBe(newBreakpoint)
    })

    it('should error if no breakpoint passed', () => {
      const newBreakpoint = undefined
      const spyError = jest.spyOn(console, 'error')

      viewport.setBreakpoint(newBreakpoint)

      expect(spyError).toBeCalled()
      expect(viewport.breakpoint).not.toBe(newBreakpoint)
    })

    it('should return if breakpoint is the same as state', () => {
      const newBreakpoint: Breakpoint = 'desktop'

      const spyMutation = jest.spyOn(viewport, 'SET_BREAKPOINT')
      viewport.setBreakpoint(newBreakpoint)

      expect(spyMutation).not.toBeCalled()
    })

    it('should call "SET_BREAKPOINT"', () => {
      const newBreakpoint: Breakpoint = 'desktopMedium'

      const spyMutation = jest.spyOn(viewport, 'SET_BREAKPOINT')
      viewport.setBreakpoint(newBreakpoint)

      expect(spyMutation).toBeCalledWith(newBreakpoint)
    })
  })

  describe('SET_BREAKPOINT', () => {
    it('should update the breakpoint', () => {
      const newBreakpoint: Breakpoint = 'desktopMedium'

      viewport.SET_BREAKPOINT(newBreakpoint)
      expect(viewport.breakpoint).toBe(newBreakpoint)
    })
  })
})
