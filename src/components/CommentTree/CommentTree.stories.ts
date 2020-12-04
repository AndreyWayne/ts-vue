import { Comment as IComment } from '@cybersport/specifications'

import Vue from 'vue'
import CommentTree, { REPLIES_LIMIT } from '.'

const components = {
  CommentTree
}

async function generateReplies (length: number = REPLIES_LIMIT) {
  const RANDOM_MAX = 10000
  const RANDOM_MIN = 1000

  // Random number from 0 to RANDOM_MAX
  const randomID = Math.floor(Math.random() * (RANDOM_MAX - RANDOM_MIN) + RANDOM_MIN)

  try {
    const paragraphs = await Promise.all(
      Array.from({ length }, async () => {
        const response = await fetch('https://fish-text.ru/get')
        const { text } = await response.json()

        return text
      })
    )

    /**
     * Returns a mapped comment.
     */
    const mapFn = (_: unknown, key: number) => {
      const id = randomID + key
      const text = paragraphs[Math.floor(Math.random() * paragraphs.length)]

      return {
        attributes: {
          text
        },

        id
      } as IComment
    }

    return Array.from({ length }, mapFn)
  } catch (error) {
    console.error(error)
    return []
  }
}

export const Basic = () => {
  return Vue.extend({
    components,

    data: () => ({
      comment: {
        attributes: {
          text: 'Мой комментарий!'
        },

        relationships: {
          replies: {
            meta: {
              totalCount: 100
            }
          }
        },

        id: 0
      } as IComment
    }),

    async mounted () {
      const { relationships = {} } = this.comment
      const data = await generateReplies()

      relationships.replies = {
        ...relationships.replies,
        data
      }
    },

    methods: {
      getReplies () {
        return generateReplies()
      }
    },

    template: `
      <CommentTree :comment="comment" :get-replies="getReplies" />
    `
  })
}

export default {
  title: 'CommentTree'
}
