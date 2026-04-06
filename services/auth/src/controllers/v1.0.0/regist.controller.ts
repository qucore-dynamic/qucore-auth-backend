// Modules
import { generateRequestID, throwError, sendResponse } from '@qucore-dynamic/packages'

// Configs
import { cookieOptions } from '@src/config'

// Services
import { registService } from '@services/v1.0.0/regist.service'

// Types
import { Request, Response } from 'express'

// Intrefaces
import { Tokens } from '@ts/interfaces/tokens.interface'

const REFRESH_AGE = Number(process.env.REFRESH_AGE)
const ACCESS_AGE = Number(process.env.ACCESS_AGE)

export const registHandler = (req: Request, res: Response) => {
  const rayID = generateRequestID()

  const { accessToken: oldAccessToken } = req.signedCookies

  console.log('cookies:', req.cookies)
  console.log('signedCookies:', req.signedCookies)

  if (oldAccessToken)
    throwError({
      rayID,
      status: 403,
      code: 'ALREADY_REGISTERED',
      message: 'User is already registered',
    })

  const data: Tokens = registService()

  return sendResponse(res, {
    message: 'User has been successfully registed',
    cookies: [
      {
        name: 'refreshToken',
        value: data.refreshToken,
        options: {
          ...cookieOptions,
          maxAge: REFRESH_AGE,
          path: '/v1.0.0/tokens-refresh',
        },
      },
      {
        name: 'accessToken',
        value: data.accessToken,
        options: {
          ...cookieOptions,
          maxAge: ACCESS_AGE,
          path: '/',
        },
      },
    ],
  })
}
