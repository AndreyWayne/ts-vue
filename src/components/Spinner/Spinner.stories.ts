import { color, number, withKnobs } from '@storybook/addon-knobs'

import Vue from 'vue'
import Spinner from '.'

const components = {
  Spinner
}

export const Basic = () => {
  return Vue.extend({
    components,

    props: {
      color: {
        default: color('color', '#ff6f22'),
        type: String
      },

      size: {
        default: number('size', 42),
        type: Number
      },

      thickness: {
        default: number('thickness', 2),
        type: Number
      }
    },

    template: `
      <Spinner :color="color" :size="size" :thickness="thickness" />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Spinner'
}
