export interface CreateMetaOptions {
  /**
   * Page Description.
   */
  description?: string

  /**
   * Page Keywords.
   */
  keywords?: string[]

  /**
   * Page Title.
   */
  title?: string

  /**
   * Title template.
   * Example: "Cybersport.ru".
   */
  titleTemplate?: string

  /**
   * Should title use template.
   */
  withTitleTemplate?: boolean
}

export interface Meta {
  content?: string
  hid?: string
  name?: string
  property?: string
}

/**
 * Default meta options.
 * @const
 */
export const DEFAULT_META_OPTIONS: CreateMetaOptions = {
  titleTemplate: 'Cybersport.ru',
  withTitleTemplate: true
}

/**
 * Generates page meta tags.
 */
export function createMeta (options?: CreateMetaOptions) {
  const currentOptions: CreateMetaOptions = {
    ...DEFAULT_META_OPTIONS,
    ...options
  }

  const {
    description,

    keywords: optionsKeywords,
    title: optionsTitle,

    titleTemplate,
    withTitleTemplate
  } = currentOptions

  // Use options keywords or generate keywords from description.
  let keywords: string[] = []

  if (optionsKeywords?.length) {
    keywords = optionsKeywords
  } else if (description?.length) {
    keywords = description.split(' ')
  }

  // If options has title template than append options title.
  const title = withTitleTemplate ? `${optionsTitle} | ${titleTemplate}` : optionsTitle

  /**
   * Primary meta.
   */
  const primaryMeta: Meta[] = [
    /**
     * Description.
     */
    {
      content: description,
      name: 'description'
    },

    /**
     * Keywords.
     */
    {
      content: keywords.join(', '),
      name: 'keywords'
    },

    /**
     * Title.
     */
    {
      content: title,
      name: 'title'
    }
  ]

  /**
   * Open Graph meta.
   */
  const openGraphMeta: Meta[] = [
    /**
     * Add "og:" to the primary meta.
     */
    ...primaryMeta.map(({ content, name }) => {
      const property = `og:${name}`

      return {
        content,
        property
      }
    }),

    /**
     * Type.
     */
    {
      content: 'website',
      property: 'og:type'
    }
  ]

  /**
   * Twitter meta.
   */
  const twitterMeta: Meta[] = [
    /**
     * Add "twitter:" to the primary meta.
     */
    ...primaryMeta.map(({ content, name }) => {
      const property = `twitter:${name}`

      return {
        content,
        property
      }
    }),

    /**
     * Card.
     */
    {
      content: 'summary_large_image',
      property: 'twitter:card'
    }
  ]

  /**
   * Current meta.
   */
  const meta: Meta[] = [...primaryMeta, ...openGraphMeta, ...twitterMeta].map((meta) => {
    // Assign a name or property for HID.
    meta.hid = meta.name || meta.property

    return meta
  })

  return {
    keywords,

    meta,
    title
  }
}
