// Types
import { Request, Response } from 'express'

export const tokensRefreshHandler = (req: Request, res: Response) => {
  res.json({ message: 'ok' })
}
