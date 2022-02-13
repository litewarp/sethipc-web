import csurf from 'csurf'

export async function csrf(req: any, res: any) {
  const config = {
    isTest: process.env.NODE_ENV === 'test',
    skip: process.env.TEST_ENV_SKIP_CSURF === 'true'
  }
  return new Promise((resolve, reject) => {
    const options = {
      cookie: true,
      ...(config.isTest && config.skip
        ? { ignoreMethods: ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'] }
        : {})
    }

    return csurf(options)(req, res, (error) => {
      if (error) reject(error)
      resolve(res)
    })
  })
}
