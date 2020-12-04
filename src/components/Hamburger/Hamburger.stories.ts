import { action } from '@storybook/addon-actions'
import { boolean, color, withKnobs } from '@storybook/addon-knobs'

import Vue from 'vue'
import Hamburger from '.'

const components = {
  Hamburger
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <div style="display: inline-block; background-color: gray;">
        <Hamburger style="padding: 20px" />
      </div>
    `
  })
}

export const Toggled = () => {
  return Vue.extend({
    components,

    template: `
      <div style="display: inline-block; background-color: gray;">
        <Hamburger is-toggled style="padding: 20px" />
      </div>
    `
  })
}

export const WithColor = () => {
  return Vue.extend({
    components,

    props: {
      color: {
        default: color('Color', 'black'),
        type: String
      }
    },

    template: `
      <div style="display: inline-block; border: 1px solid #eee;">
        <Hamburger :color="color" style="padding: 20px" />
      </div>
    `
  })
}

export const WithToggled = () => {
  return Vue.extend({
    components,

    props: {
      isToggled: {
        default: boolean('Toggled', false),
        type: Boolean
      }
    },

    template: `
      <div style="display: inline-block; border: 1px solid #eee;">
        <Hamburger color="black" :is-toggled="isToggled" style="padding: 20px" />
      </div>
    `
  })
}

export const Interactive = () => {
  return Vue.extend({
    components,

    data: () => ({
      isToggled: false
    }),

    methods: {
      onToggle (this: any, isToggled: boolean): void {
        this.isToggled = isToggled
        return action('onToggle')(isToggled)
      }
    },

    template: `
      <div style="display: inline-block; background-color: gray;">
        <Hamburger :is-toggled="isToggled" style="padding: 20px" @onToggle="onToggle" />
      </div>
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Hamburger'
}
