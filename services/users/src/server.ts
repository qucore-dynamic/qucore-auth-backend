// Modules
import express from 'express'

// Configs
import { __PORT } from './config.js'

const app = express()

app.use(express.json())

app.listen(__PORT, () => {
  console.log(`Auth service starder on :${__PORT}`)
})
