import incstr from 'incstr'

/**
 * Returns a generator ID function.
 */
export function createUniqueIdGenerator (): Function {
  const uniqIds: {
    [key: string]: string
  } = {}

  // Without letter "d" to remove "ad", because AdBlock can block it.
  const alphabet = 'abcefghijklmnopqrstuvwxyzABCEFGHJKLMNOPQRSTUVWXYZ'

  // Create a generator.
  const generateNextId = incstr.idGenerator({
    alphabet
  })

  return (name: string): string => {
    if (!uniqIds[name]) {
      uniqIds[name] = generateNextId()
    }

    return uniqIds[name]
  }
}

// Local name generator.
const localNameIdGenerator = createUniqueIdGenerator()

/**
 * Returns a scoped class name.
 *
 * @param localName - Class local name.
 * @param resourcePath - Path to file where class is.
 *
 * @returns A scoped class name.
 */
export function getScopedName (localName: string, resourcePath: string): string {
  // Available types.
  const types = ['components', 'layouts', 'pages']

  // Current component type.
  const componentType = types.reduce((acc, type) => {
    if (resourcePath.includes(`/${type}/`)) {
      return type[0]
    }

    return acc
  }, '')

  // Local class name.
  const localId = localNameIdGenerator(resourcePath) + localNameIdGenerator(localName)

  // A unique class name.
  return componentType ? `${componentType}-${localId}` : localId
}
