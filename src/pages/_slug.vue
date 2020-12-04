<template>
  <nuxt-child :material="material" />
</template>

<script lang="ts">
import { Material } from '@cybersport/specifications'
import { Context } from '@nuxt/types'

import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MaterialPage extends Vue {
  material = {} as Material

  async asyncData ({ app, error, params }: Context) {
    try {
      const { data: material } = await app.$api.materials.getMaterialBySlug(params.slug)

      return {
        material
      }
    } catch (message) {
      error({ message, statusCode: 404 })
    }
  }
}
</script>
