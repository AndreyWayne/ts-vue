import TheHeaderNavigation from './TheHeaderNavigation.vue'

export interface MenuEntry {
  items?: MenuEntryItems[]

  position: number
  title: string

  url?: string
}

export interface MenuEntryItems extends MenuEntry {
  items?: never
  url: string
}

export type MenuList = MenuEntry[] | MenuEntry[][]

export default TheHeaderNavigation
