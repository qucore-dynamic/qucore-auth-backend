// Modules
import express from 'express'

// Router
import router from '@routes/router'

// Configs
import { __PORT } from './config'

const app = express()

app.use(express.json())

app.use('/auth/v1', router)

app.use((req, res) => {
  res.status(404).json({
    error: {
      code: 'ROUTE_NOT_FOUND',
      details: {
        timestamp: new Date().toISOString(),
        path: req.originalUrl,
        method: req.method,
      },
    },
  })
})

app.listen(__PORT, () => {
  console.log(`Auth service starder on :${__PORT}`)
})
