// Modules
import express from 'express'
import cookieParser from 'cookie-parser'

// Libs
import generateRequestID from '@libs/generators/rayGenerator.generator'

// Router
import router from '@routes/router'

// Configs
import { __PORT } from './config'

const app = express()
const cookiesSecret = process.env.COOKIES_SECRET

if (!cookiesSecret) throw new Error('❌ FATAL: COOKIES_SECRET not found')

app.use(express.json())
app.use(cookieParser(cookiesSecret))

app.use('/v1', router)

app.use((req, res) => {
  const rayID = generateRequestID()

  res.status(404).json({
    code: 'ROUTE_NOT_FOUND',
    details: {
      timestamp: new Date().toISOString(),
      rayID,
    },
  })
})

app.listen(__PORT, () => {
  console.log(`Auth service starder on :${__PORT}`)
})
