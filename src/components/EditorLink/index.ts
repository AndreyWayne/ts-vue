import EditorLink from './EditorLink.vue'

export enum ItemsState {
  FAILED = 'Failed',
  LOADED = 'Loaded',
  LOADING = 'Loading',
  NOT_ASKED = 'Not Asked',
}

export interface ItemProp {
  slug: string
  type: string
}

export default EditorLink
