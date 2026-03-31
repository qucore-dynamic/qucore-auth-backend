// Modules
import { Router } from 'express'

// Controllers
import { registHandler } from '@controllers/regist.controller'
import { loginHandler } from '@controllers/login.controller'
import { updateHandler } from '@controllers/update.controller'
import { deleteHandler } from '@controllers/delete.controller'
import { blockHandler } from '@controllers/block.controller'
import { singleLogoutHandler } from '@controllers/single-logout.controller'
import { commonLogoutHandler } from '@controllers/common-logout.controller'

const authRouter = Router()

authRouter.get('/regist', registHandler)
authRouter.get('/login', loginHandler)
authRouter.get('/update', updateHandler)
authRouter.get('/delete', deleteHandler)
authRouter.get('/block', blockHandler)
authRouter.get('/single-logout', singleLogoutHandler)
authRouter.get('/common-logout', commonLogoutHandler)

export default authRouter
