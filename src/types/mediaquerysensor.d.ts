declare module 'mediaquerysensor' {
  export interface Query {
    action: () => void

    mediaQuery: string
    ref: string
  }

  export interface QuerySensor {
    action: () => void
    boundAction: () => void

    mediaQuery: string
    mediaQueryList: MediaQueryList
  }

  interface MediaQuerySensor {
    add(query: Query): void

    empty(): void

    get(): {
      [key: string]: QuerySensor
    }

    remove(ref: string): void
  }

  const MQS: MediaQuerySensor
  export default MQS
}
