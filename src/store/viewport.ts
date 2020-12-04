import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator'

/**
 * Available breakpoints.
 * @const
 */
export const BREAKPOINTS = {
  desktop: 1024,
  desktopMedium: 1280,
  desktopWide: 1600,

  mobile: 320,
  mobileMedium: 375,
  mobileWide: 425,

  tablet: 768
}

export type Breakpoint = keyof typeof BREAKPOINTS

@Module({
  name: 'viewport',
  namespaced: true,
  stateFactory: true
})
export default class Viewport extends VuexModule {
  /**
   * Breakpoint.
   */
  breakpoint: Breakpoint = 'desktop'

  get isDesktop () {
    return this.breakpoint === 'desktop'
  }

  get isDesktopMedium () {
    return this.breakpoint === 'desktopMedium'
  }

  get isDesktopOrHigher () {
    return this.breakpoint.startsWith('desktop')
  }

  get isDesktopOrBellow () {
    return !this.isDesktopOrHigher
  }

  get isDesktopWideOrHigher () {
    return this.breakpoint.startsWith('desktopWide')
  }

  get isDesktopWide () {
    return this.breakpoint === 'desktopWide'
  }

  get isMobile () {
    return this.breakpoint === 'mobile'
  }

  get isMobileMedium () {
    return this.breakpoint === 'mobileMedium'
  }

  get isMobileWide () {
    return this.breakpoint === 'mobileWide'
  }

  get isMobileOrTablet () {
    return !this.isDesktopOrHigher
  }

  get isMobileOrDesktop () {
    return !this.isDesktopWideOrHigher
  }

  get isTablet () {
    return this.breakpoint === 'tablet'
  }

  get isTabletOrHigher () {
    return !this.breakpoint.startsWith('mobile')
  }

  get isTabletOrBelow () {
    return !this.isTabletOrHigher
  }

  /**
   * Synchronizes the viewport cookie with the store.
   */
  @VuexAction
  nuxtServerInit (): void {
    const device = this.store.$device
    const breakpoint = device.isMobile ? 'mobile' : device.isTablet ? 'tablet' : 'desktop'

    return this.setBreakpoint(breakpoint)
  }

  /**
   * Validates new breakpoint before commiting "SET_BREAKPOINT".
   *
   * @param newBreakpoint - A valid breakpoint.
   */
  @VuexAction
  setBreakpoint (newBreakpoint?: Breakpoint): void {
    const errorMessage = 'Failed to update the breakpoint'

    // Check if breakpoint is passed.
    if (!newBreakpoint) {
      return console.error(`${errorMessage}: No breakpoint passed in arguments.`)
    }

    // Check if breakpoint is the same as state.
    if (this.breakpoint === newBreakpoint) {
      return
    }

    // Get an array of breakpoints keys.
    const breakpointKeys = Object.keys(BREAKPOINTS)

    // Check if breakpoint is valid.
    if (!breakpointKeys.includes(newBreakpoint)) {
      return console.error(`${errorMessage}: Breakpoint "${newBreakpoint}" is invalid.`)
    }

    // Commit "SET_BREAKPOINT".
    this.SET_BREAKPOINT(newBreakpoint)
  }

  /**
   * Updates the breakpoint.
   *
   * @param newBreakpoint - A valid breakpoint.
   */
  @VuexMutation
  SET_BREAKPOINT (newBreakpoint: Breakpoint): void {
    this.breakpoint = newBreakpoint
  }
}
