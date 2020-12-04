// import { promises as fs } from 'fs'
// import { resolve } from 'path'
//
// import lowdb from 'lowdb'
// import Memory from 'lowdb/adapters/Memory'
//
// const db = lowdb(new Memory('db'))
//
// /**
//  * Initialize DB defaults.
//  */
// async function initializeDefaults() {
//   const defaults: any = {}
//   const routesPath = resolve(__dirname, 'routes')
//
//   for (const fileName of await fs.readdir(routesPath)) {
//     const { defaultState } = await import(resolve(routesPath, fileName))
//
//     if (!defaultState) {
//       continue
//     }
//
//     const key = fileName.replace(/\.[^/.]+$/, '')
//
//     if (key) {
//       defaults[key] = defaultState
//     }
//   }
//
//   db.defaults(defaults).write()
// }
//
// ;(async () => {
//   await initializeDefaults()
// })()
//
// export default db
