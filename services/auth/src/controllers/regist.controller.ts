// Configs
import { cookieOptions } from 'src/config'

// Libs
import generateRequestID from '@libs/generators/rayGenerator.generator'

// Services
import { registService } from '@services/regist.service'

// Types
import { Request, Response } from 'express'

export const registHandler = (req: Request, res: Response) => {
  const rayID = generateRequestID()
  const { refreshToken: oldRefreshToken, accessToken: oldAccessToken } = req.signedCookies

  if (oldRefreshToken || oldAccessToken) {
    return res.status(403).json({
      code: 'ALREADY_REGISTERED',
      details: {
        timestamp: new Date().toISOString(),
        rayID,
      },
    })
  }

  try {
    //TODO: Call the registration service
    const data = registService()

    return res.status(200).json({
      code: 'OK',
      details: {
        timestamp: new Date().toISOString(),
        rayID,
      },
    })
    // .cookie('refreshToken', data.refreshToken, {
    //   ...cookieOptions,
    //   maxAge: Number(process.env.REFRESH_AGE),
    //	 path: '/auth',
    //	 signed: true,
    // })
    // .cookie('accessToken', data.accessToken, {
    //   ...cookieOptions,
    //   maxAge: Number(process.env.ACCESS_AGE),
    //	 path: '/',
    //	 signed: true,
    // })
  } catch (err) {
    //TODO: Error handling
  }
}
