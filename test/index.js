/**
//  * @flow
 */


const app = require('./src')
//  import app from './src'

 const port = process.env.PORT || 3001
 const server = app.listen(port)
 
 server.on('error', (err) => {
   console.error(err)
 })