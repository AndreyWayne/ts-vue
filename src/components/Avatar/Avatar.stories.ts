import { boolean, number, object, text, withKnobs } from '@storybook/addon-knobs'

import Vue from 'vue'
import Avatar, { Picture } from '.'

const basePicture: Picture = {
  url: 'https://media.giphy.com/media/3OHjwArYSNu5W/source.gif'
}

const components = {
  Avatar
}

export const Basic = () => {
  return Vue.extend({
    components,

    props: {
      badgeIcon: {
        default: text('badgeIcon', 'verified'),
        type: String
      },

      badgeSize: {
        default: number('badgeSize', 24),
        type: Number
      },

      isBadgeVisible: {
        default: boolean('isBadgeVisible', false),
        type: Boolean
      },

      pictureSize: {
        default: number('pictureSize', 64),
        type: Number
      },

      picture: {
        default: object('picture', basePicture),
        type: Object
      }
    },

    template: `
      <Avatar :badge-icon="badgeIcon" :badge-size="badgeSize" :is-badge-visible="isBadgeVisible" :picture="picture" :picture-size="pictureSize" />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Avatar'
}
