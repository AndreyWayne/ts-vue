import CommentTree from './CommentTree.vue'

export const REPLIES_LIMIT = 15

export enum REPLIES_STATE {
  FAILED = 'Failed',
  LOADED = 'Loaded',
  LOADING = 'Loading',
  NOT_ASKED = 'Not Asked',
}

export default CommentTree
