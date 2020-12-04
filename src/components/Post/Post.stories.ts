import { boolean, withKnobs } from '@storybook/addon-knobs'
import Vue from 'vue'

import Post from '.'

const components = {
  Post
}

const basicPost = {
  published_at: new Date().getTime() / 1000 - 500,

  tags: [
    {
      slug: 'games',
      title: 'Игры'
    }
  ],

  title: 'Бета Path of Exile 2 может быть отложена из‑за коронавируса'
}

export const Basic = () => {
  return Vue.extend({
    components,

    computed: {
      post () {
        return basicPost
      }
    },

    template: `
      <div style="max-width: 790px">
        <Post :post="post" />
      </div>
    `
  })
}

export const Loading = () => {
  return Vue.extend({
    components,

    props: {
      isLoading: {
        default: boolean('Is Loading', true),
        type: Boolean
      }
    },

    computed: {
      post () {
        return basicPost
      }
    },

    template: `
      <div style="max-width: 790px">
        <Post :is-loading="isLoading" :post="post" />
      </div>
    `
  })
}

export const WithComments = () => {
  return Vue.extend({
    components,

    computed: {
      post () {
        return {
          ...basicPost,
          comments: 10
        }
      }
    },

    template: `
      <div style="max-width: 790px">
        <Post :post="post" />
      </div>
    `
  })
}

export const WithText = () => {
  return Vue.extend({
    components,

    computed: {
      post () {
        return {
          ...basicPost,

          lead_text:
            'Grinding Gear Games пересмотрит планы по запуску беты Path of Exile 2 из-за эпидемии коронавируса. Об этом сообщил сооснователь студии Крис Уилсон в интервью порталу PCGamesN. Ранее сообщалось, что старт теста запланирован на конец 2020 года.'
        }
      }
    },

    template: `
      <div style="max-width: 790px">
        <Post :post="post" />
      </div>
    `
  })
}

export const WithImage = () => {
  return Vue.extend({
    components,

    computed: {
      post () {
        return {
          ...basicPost,

          cover_media: {
            url: 'https://avatars.mds.yandex.net/get-pdb/1965212/43315052-22b4-4f5f-bdd1-5803982c09e1/s1200'
          }
        }
      }
    },

    template: `
      <div style="max-width: 790px">
        <Post :post="post" />
      </div>
    `
  })
}

export const WithMultipleTags = () => {
  return Vue.extend({
    components,

    computed: {
      post () {
        return {
          ...basicPost,

          tags: [
            ...basicPost.tags,

            {
              slug: 'longread',
              title: 'Longread'
            },
            {
              slug: 'interview',
              title: 'Интервью'
            }
          ]
        }
      }
    },

    template: `
      <div style="max-width: 790px">
        <Post :post="post" />
      </div>
    `
  })
}

export const WithSponsor = () => {
  return Vue.extend({
    components,

    computed: {
      post () {
        return {
          ...basicPost,

          sponsor: {
            image: 'https://www.parimatch.ru/img/logos/pm-logo-stay-home.svg'
          }
        }
      }
    },

    template: `
      <div style="max-width: 790px">
        <Post :post="post" />
      </div>
    `
  })
}

export default {
  decorators: [withKnobs],
  title: 'Post'
}
