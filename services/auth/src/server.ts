// Configs
import { __PORT } from './config'

// Modules
import express, { NextFunction, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import { generateRequestID } from '@qucore-dynamic/packages'

// Router
import routerV1_0_0 from '@routes/v1.0.0/router'

// Interfaces
import AppError from '@ts/interfaces/error.interface'

const app = express()
const cookiesSecret = process.env.COOKIES_SECRET

if (!cookiesSecret) throw new Error('❌ FATAL: COOKIES_SECRET not found')

app.use(express.json())
app.use(cookieParser(cookiesSecret))

app.use('/v1.0.0', routerV1_0_0)

app.use((req, res) => {
  const rayID = generateRequestID()

  res.status(404).json({
    code: 'ROUTE_NOT_FOUND',
    details: {
      timestamp: new Date().toISOString(),
      rayID,
    },
  } as AppError)
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err && typeof err === 'object' && 'code' in err && 'details' in err) {
    return res.status(err.status).json({
      code: err.code,
      message: err.message,
      details: {
        timestamp: err.details.timestamp,
        rayID: err.details.rayID,
      },
    } as AppError)
  }

  return res.status(500).json({
    code: 'INTERNAL_ERROR',
    message: 'Server crashed. Wait some time',
    details: {
      timestamp: new Date().toISOString(),
      rayID: generateRequestID(),
    },
  } as AppError)
})

app.listen(__PORT, () => {
  console.log(`Auth service started on :${__PORT}`)
})
