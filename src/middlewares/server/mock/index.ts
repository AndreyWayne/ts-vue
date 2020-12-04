// import { resolve } from 'path'
// import { Error } from '@cybersport/specifications'
//
// import { OpenApiValidator } from 'express-openapi-validator'
// import { OpenApiSpecLoader } from 'express-openapi-validator/dist/framework/openapi.spec.loader'
//
// import express from 'express'
// import bodyParser from 'body-parser'
//
// // Create an Express Application.
// const app = express()
//
// app.use(bodyParser.json())
// ;(async () => {
//   // Load spec.
//   const spec = await new OpenApiSpecLoader({
//     apiDoc: require.resolve('@cybersport/specifications/lib/openapi.v1.yaml'),
//   }).load()
//
//   // Change the basePaths.
//   spec.basePaths = ['/api']
//
//   // Create an instance of validator.
//   const validator = new OpenApiValidator({
//     apiSpec: spec.apiDoc,
//     operationHandlers: resolve(__dirname, 'routes'),
//
//     validateRequests: true,
//     validateResponses: true,
//   }) as any
//
//   // Install validator middleware.
//   await validator.installMiddleware(app, spec)
//
//   app.use((_req, res) => {
//     const error: Error = {
//       errors: [
//         {
//           code: '404',
//           status: 'Not Found',
//           title: 'Not Found',
//         },
//       ],
//     }
//
//     res.status(404).send(error)
//   })
// })()
//
// export default app
