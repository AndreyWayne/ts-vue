import { withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import EmptyFeed from '.'

const components = {
  EmptyFeed
}

export const Basic = () => {
  return Vue.extend({
    components,

    template: `
      <EmptyFeed />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'EmptyFeed'
}
