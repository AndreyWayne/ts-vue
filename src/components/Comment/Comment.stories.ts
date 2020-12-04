import { Comment as IComment } from '@cybersport/specifications'
import { select, withKnobs } from '@storybook/addon-knobs'

import Vue from 'vue'
import Comment from '.'

const basicComment = {
  attributes: {
    text: 'Мой комментарий!'
  },

  id: 0,
  type: 'comments'
} as IComment

const components = {
  Comment
}

export const Basic = () => {
  return Vue.extend({
    components,

    computed: {
      comment () {
        return {
          ...basicComment
        }
      }
    },

    template: `
      <Comment :comment="comment" />
    `
  })
}

export const Loading = () => {
  return Vue.extend({
    components,

    computed: {
      comment () {
        return {
          ...basicComment
        }
      }
    },

    template: `
      <Comment :comment="comment" is-loading />
    `
  })
}

export const Updated = () => {
  return Vue.extend({
    components,

    props: {
      updatedBy: {
        default: select('updatedBy', ['user', 'moderator'], 'user'),
        type: String
      }
    },

    computed: {
      comment () {
        return {
          ...basicComment,

          attributes: {
            ...basicComment.attributes,
            updatedBy: this.updatedBy
          }
        }
      }
    },

    template: `
      <Comment :comment="comment" />
    `
  })
}

export const Deleted = () => {
  return Vue.extend({
    components,

    props: {
      deletedBy: {
        default: select('deletedBy', ['user', 'moderator'], 'user'),
        type: String
      }
    },

    computed: {
      comment () {
        return {
          ...basicComment,

          attributes: {
            ...basicComment.attributes,
            deletedBy: this.deletedBy
          }
        }
      }
    },

    template: `
      <Comment :comment="comment" />
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Comment'
}
