import csurf from 'csurf'
import { IncomingMessage, OutgoingMessage } from 'http'

export async function csrf(req: any, res: any) {
  return new Promise((resolve, reject) => {
    return csurf({ cookie: true })(req, res, (error) => {
      if (error) reject(error)
      resolve(res)
    })
  })
}
