<template>
  <!-- NAVIGATION -->
  <nav :class="[$style.navigation]">
    <!-- LIST -->
    <ul v-for="(list, listKey) in currentLists" :key="listKey" :class="[$style.list]">
      <!-- ITEM -->
      <li v-for="(link, linkKey) in list" :key="linkKey" :class="[$style.item]">
        <!-- LINK -->
        <div
          v-if="link.items"
          :class="[$style.link, isDropdownActive(linkKey) && $style.isActive]"
          @click="setActiveDropdown(linkKey)"
        >
          <span>{{ link.title }}</span>

          <!-- LINK:ICON -->
          <div :class="[$style.icon]">
            <svg-icon name="chevron" />
          </div>

          <!-- DROPDOWN -->
          <transition name="fade">
            <ul v-if="isDropdownActive(linkKey)" :class="[$style.dropdown]">
              <li v-for="(item, itemKey) in link.items" :key="itemKey" :class="[$style.item]">
                <nuxt-link :active-class="activeClass || $style.isActive" :class="[$style.link]" :to="item.url">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </transition>
        </div>

        <!-- LINK -->
        <nuxt-link
          v-else-if="link.url"
          :active-class="activeClass || $style.isActive"
          :class="[$style.link]"
          :to="link.url"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { MenuEntry, MenuList } from '.'

/**
 * Sort entry by position.
 *
 * @param a - First entry.
 * @param b - Second entry.
 *
 * @returns A difference between a & b positions.
 */
function sortByPosition (a: MenuEntry, b: MenuEntry) {
  return a.position - b.position
}

/**
 * Maps and sorts entries & entries items by position.
 *
 * @param entries - An array of entries.
 *
 * @returns An array of mapped & sorted entries.
 */
function mapAndSortEntries (entries: MenuEntry[]) {
  // Array of sorted entries.
  const sortedEntries = entries.sort(sortByPosition)

  // Array of mapped entries & sorted items inside.
  const mappedEntries = sortedEntries.map((entry: MenuEntry) => {
    const entryItems = entry.items

    if (!Array.isArray(entryItems)) {
      return entry
    }

    const items = entryItems.sort(sortByPosition)

    return {
      ...entry,
      items
    }
  })

  return mappedEntries
}

@Component
export default class TheHeaderNavigation extends Vue {
  /**
   * Active dropdown.
   */
  activeDropdown = -1

  /**
   * Link active class.
   */
  @Prop({ type: String })
  readonly activeClass!: string

  /**
   * Menu.
   */
  @Prop({ required: true, type: Array })
  readonly menu!: MenuList

  /**
   * Returns an array of menu lists.
   */
  get currentLists () {
    // Cache menu.
    const currentMenu = this.menu

    // Detect if menu has multiple arrays.
    const isMultiArray = currentMenu.every((list: MenuList | MenuEntry) => Array.isArray(list))

    // Return an array of sorted lists.
    if (isMultiArray) {
      return (currentMenu as MenuEntry[][]).map(entry => mapAndSortEntries(entry))
    } else {
      return [mapAndSortEntries(currentMenu as MenuEntry[])]
    }
  }

  /**
   * Called right before the instance is destroyed.
   */
  beforeDestroy () {
    window.removeEventListener('click', this.onWindowClick)
  }

  /**
   * Called after the instance has been mounted.
   */
  mounted () {
    window.addEventListener('click', this.onWindowClick)
  }

  /**
   * Returns dropdown visibility by key.
   *
   * @param key - List key.
   *
   * @returns A boolean of visibility.
   */
  isDropdownActive (key: number) {
    return this.activeDropdown === key
  }

  /**
   * Handles window "click" event.
   */
  onWindowClick ({ target }: MouseEvent) {
    const dropdownElement = this.$el.querySelector(`.${this.$style.dropdown}`) as Node

    if (!dropdownElement) {
      return
    }

    const elementHasTarget = dropdownElement.contains(target as Node)
    const parentHasTarget = dropdownElement.parentElement?.contains(target as Node)

    if (elementHasTarget || parentHasTarget) {
      return
    }

    this.activeDropdown = -1
  }

  /**
   * Changes active dropdown.
   *
   * @param key - Dropdown key.
   */
  setActiveDropdown (key: number) {
    this.activeDropdown = this.activeDropdown === key ? -1 : key
  }
}
</script>

<style lang="scss" module>
/* -- NAVIGATION -- */
.navigation {
  display: flex;
  min-height: 100%;

  overflow-x: auto;

  @include breakpoint('desktop') {
    overflow-x: unset;
  }
}

/* -- LIST -- */
.list {
  display: flex;
  flex: 1;

  list-style: none;

  margin: 0;
  padding: 0;
}

/* -- LIST::BEFORE -- */
.list:not(:first-child)::before {
  background-color: white;

  height: 25px;
  margin: 7px 20px;

  transform: skewX(-20deg);
  width: 2px;

  @include breakpoint('desktop') {
    content: '';
  }
}

/* -- ITEM -- */
.item {
  display: inline-flex;
  height: inherit;
}

/* -- LINK -- */
.link {
  align-items: center;
  color: white;

  cursor: pointer;
  display: inline-flex;

  height: inherit;
  padding: 0 11px;

  text-decoration: none;
  transition: color $transition;

  white-space: nowrap;

  @include hover() {
    color: var(--color-primary);
  }

  @include breakpoint('desktop') {
    position: relative;
  }
}

/* -- LINK:ICON -- */
.link .icon {
  margin-left: 9px;

  transition: transform $transition;
  will-change: transform;
}

/* -- DROPDOWN -- */
.dropdown {
  background-color: var(--color-layer);
  box-shadow: 0 1px 4px transparentize(black, 0.85);

  display: flex;
  flex-direction: column;

  left: 0;
  list-style: none;

  margin: 0;

  overflow: hidden;
  padding: 0;

  position: absolute;
  top: 100%;

  transition: background-color $transition-mode, visibility $transition, opacity $transition;

  width: 100%;
  will-change: background-color, visibility, opacity;

  @include breakpoint('desktop') {
    left: unset;
    right: -100%;

    width: auto;
  }
}

/* -- DROPDOWN -- */
.dropdown .link {
  color: var(--color-text);

  display: inline-flex;

  min-width: 200px;
  padding: 13px 24px !important;

  text-decoration: none;

  @include hover() {
    color: var(--color-primary);
  }
}

/* -- LINK.IS-ACTIVE -- */
.link.isActive {
  color: color('primary');
}

/* -- LINK.IS-ACTIVE:ICON -- */
.link.isActive .icon {
  color: var(--color-primary);
  transform: rotate3d(0, 0, 1, 180deg);
}
</style>
