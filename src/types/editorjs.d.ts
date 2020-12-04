declare module '@editorjs/header'
declare module '@editorjs/list'
declare module '@editorjs/marker'
declare module '@editorjs/simple-image'

declare module '@editorjs/editorjs' {
  import { API, EditorConfig } from '@editorjs/editorjs/types'

  export interface EditorPlugin<T> {
    api: API
    config: EditorConfig
    data: T
  }
}
