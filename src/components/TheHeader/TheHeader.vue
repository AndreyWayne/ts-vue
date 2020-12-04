<template>
  <header :class="[$style.header]">
    <!-- MENU -->
    <div :class="[$style.menu]">
      <!-- MENU:CONTAINER -->
      <div :class="[$style.container]">
        <!-- HAMBURGER -->
        <Hamburger v-if="viewport.isMobileOrTablet" :class="[$style.hamburger]" />

        <!-- LOGO -->
        <nuxt-link :class="[$style.logo]" to="/" @click.native="onLogoClick">
          <svg-icon :name="currentLogo" />
        </nuxt-link>

        <!-- MENU:NAVIGATION -->
        <TheHeaderNavigation
          v-if="viewport.isDesktopOrHigher"
          :active-class="$style.isActive"
          :class="[$style.navigation]"
          :menu="currentMenu"
        />

        <!-- CONTROLS -->
        <div :class="[$style.controls]">
          <!-- ACTIONS -->
          <div :class="[$style.actions]">
            <div :class="[$style.action]">
              <svg-icon :name="currentSearch" />
            </div>

            <div v-if="viewport.isMobileOrTablet" :class="[$style.action]">
              <svg-icon name="user" />
            </div>

            <div v-if="viewport.isDesktopOrHigher" :class="[$style.action]">
              <svg-icon name="moon" />
            </div>
          </div>

          <!-- BUTTON -->
          <button v-if="viewport.isDesktopOrHigher" :class="[$style.button]">
            <span>Войти</span>
          </button>
        </div>
      </div>
    </div>

    <!-- SUBMENU -->
    <nav :class="[$style.submenu]">
      <!-- SUBMENU:CONTAINER -->
      <div :class="[$style.container]">
        <TheHeaderNavigation :class="[$style.navigation]" :menu="currentSubMenu" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Hamburger from '@/components/Hamburger'
import TheHeaderNavigation, { MenuList } from '@/components/TheHeaderNavigation'

@Component({
  components: {
    Hamburger,
    TheHeaderNavigation
  }
})
export default class TheHeader extends Vue {
  /**
   * Returns a logo name based on viewport.
   */
  get currentLogo (): string {
    return this.viewport.isMobileOrTablet ? 'logo-small' : 'logo'
  }

  /**
   * Returns a search icon based on viewport.
   */
  get currentSearch (): string {
    return this.viewport.isMobileOrTablet ? 'search-thin' : 'search'
  }

  /**
   * Returns an array of current site links in the menu.
   */
  get currentMenu (): MenuList {
    return [
      {
        position: 1,

        title: 'Матчи',
        url: '/matches'
      },
      {
        position: 2,

        title: 'Турниры',
        url: '/tournaments'
      },
      {
        position: 3,

        title: 'Команды и игроки',
        url: '/teams-and-players'
      },
      {
        position: 4,

        title: 'Блоги',
        url: '/blogs'
      },
      {
        position: 5,

        title: 'Магазин',
        url: '/shop'
      },
      {
        position: 6,

        title: 'Компклубы',
        url: '/clubs'
      }
    ]
  }

  /**
   * Returns an array of current site links in the sub menu.
   */
  get currentSubMenu (): MenuList {
    return [
      [
        {
          position: 1,

          title: 'Dota 2',
          url: '/games/dota-2'
        },
        {
          position: 2,

          title: 'CS:GO',
          url: '/games/cs-go'
        },
        {
          position: 3,

          items: [
            {
              position: 1,

              title: 'Apex Legends',
              url: '/games/apex-legends'
            },
            {
              position: 2,

              title: 'Artifact',
              url: '/games/artifact'
            },
            {
              position: 3,

              title: 'League of Legends',
              url: '/games/lol'
            },
            {
              position: 4,

              title: 'Overwatch',
              url: '/games/overwatch'
            },
            {
              position: 5,

              title: 'Hearthstone',
              url: '/games/hearthstone'
            },
            {
              position: 6,

              title: 'Warcraft III',
              url: '/games/warcraft-iii'
            }
          ],
          title: 'Ещё'
        }
      ],
      [
        {
          position: 1,

          title: 'Игровые новости',
          url: '/news'
        },
        {
          position: 2,

          title: 'Бизнес',
          url: '/business'
        },
        {
          position: 3,

          title: 'Ставки',
          url: '/bets'
        }
      ]
    ]
  }

  /**
   * Bind viewport module.
   */
  get viewport () {
    return this.$modules.viewport
  }

  /**
   * Handles logo click.
   */
  onLogoClick () {
    if (this.$route.name !== 'index') {
      return
    }

    // Scroll to top if on index page.
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
}
</script>

<style lang="scss" module>
/* -- CONTAINER -- */
.container {
  @include container();

  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}

/* -- HEADER -- */
.header {
  display: flex;
  flex-direction: column;

  position: sticky;

  top: 0;
  z-index: 100;
}

/* -- LOGO -- */
.logo {
  align-items: center;

  background-color: color('licorice', 'dark');
  color: white;

  display: inline-flex;

  height: 100%;
  justify-content: center;

  left: 50%;
  outline: none;

  position: absolute;
  transform: translate3d(-50%, 0, 0);

  width: 50px;

  @include breakpoint('desktop') {
    left: 0;

    position: relative;
    transform: none;

    width: auto;
  }
}

/* -- LOGO::BEFORE -- */
.logo::before {
  background-color: inherit;

  height: 100%;
  position: absolute;

  right: -20px;
  top: 0;

  transform: skewX(-20deg);
  width: 30px;

  @include breakpoint('desktop') {
    content: '';
  }
}

/* -- LOGO:SVG -- */
.logo svg {
  height: 28px;

  position: relative;
  width: auto;

  @include breakpoint('desktop') {
    height: 40px;
  }
}

/* -- HAMBURGER -- */
.hamburger {
  padding: 15px;
}

/* -- MENU -- */
.menu {
  background-color: color('licorice', 'dark');
  height: 50px;

  position: relative;

  @include breakpoint('desktop') {
    background: linear-gradient(176.66deg, #f26b24 16.92%, #ffa011 66.81%);
  }
}

/* -- MENU::BEFORE -- */
.menu::before {
  background-color: color('licorice', 'dark');

  content: '';
  height: 100%;

  left: 0;
  position: absolute;
  top: 0;

  width: 50%;
}

/* -- MENU:CONTAINER -- */
.menu .container {
  background: inherit;
  justify-content: space-between;

  padding: 0;

  @include breakpoint('desktop') {
    justify-content: flex-start;
  }
}

/* -- MENU:NAVIGATION -- */
.menu .navigation {
  flex: 1;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;

  padding-left: 30px;
  text-transform: uppercase;
}

/* -- MENU:NAVIGATION:A -- */
.menu .navigation a {
  @include hover() {
    color: transparentize(white, 0.5);
  }
}

/* -- MENU:NAVIGATION:IS-ACTIVE -- */
.menu .navigation .isActive {
  color: transparentize(white, 0.5);
}

/* -- SUBMENU -- */
.submenu {
  background-color: black;
  height: 40px;
}

/* -- SUBMENU:CONTAINER -- */
.submenu .container {
  padding: 0;

  @include breakpoint('desktop') {
    padding-left: 160px;
  }
}

/* -- SUBMENU:NAVIGATION -- */
.submenu .navigation {
  font-size: 13px;
  font-weight: 500;

  padding: 0;
}

/* -- SUBMENU:A -- */
.submenu a {
  padding: 0 15px;
}

/* -- CONTROLS -- */
.controls {
  align-items: center;
  display: flex;

  height: inherit;
}

/* -- ACTIONS -- */
.actions {
  display: flex;
  height: inherit;
}

/* -- ACTION -- */
.action {
  align-items: center;
  color: white;

  cursor: pointer;
  display: inline-flex;

  height: 100%;
  justify-content: center;

  position: relative;
  width: 50px;

  @include hover() {
    svg {
      opacity: 0.5;
    }
  }
}

/* -- ACTION:SVG -- */
.action svg {
  transition: opacity $transition;
  will-change: opacity;
}

/* -- ACTION::BEFORE -- */
.action:not(:first-child)::before {
  background-color: white;
  height: 70%;

  left: -5px;
  pointer-events: none;

  position: absolute;
  top: 50%;

  transform: skew(-20deg) translateY(-50%);
  width: 1px;

  @include breakpoint('desktop') {
    content: '';
  }
}

/* -- BUTTON -- */
.button {
  background-color: transparentize(black, 1);
  border: 0;

  color: white;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;

  margin-left: 10px;
  outline: none;

  padding: 5.56px 15px;
  position: relative;

  text-transform: uppercase;
  transition: color $transition;

  will-change: color;

  @include hover() {
    color: #ffa011;

    &::before {
      background-color: white;
    }
  }
}

/* -- BUTTON:SPAN -- */
.button span {
  position: relative;
}

/* -- BUTTON::BEFORE -- */
.button::before {
  border: 1px solid white;

  content: '';
  height: 100%;

  left: -1px;
  position: absolute;

  top: -1px;
  transform: skew(-20deg);

  transition: background-color $transition;

  width: 100%;
  will-change: background-color;
}
</style>
