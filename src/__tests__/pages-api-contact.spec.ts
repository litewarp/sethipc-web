import handler from '../pages/api/contact'
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('contact api route', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV }
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  it('should return a 405 if the method is not a POST', async () => {
    expect.assertions(2)
    const req = getMockReq({ method: 'GET' })
    const { res, next, clearMockRes } = getMockRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.send).toHaveBeenCalledWith('Method not allowed')
  })
  it('should return a 401 if the csrfToken is invalid', async () => {
    expect.assertions(2)
    const req = getMockReq({ method: 'POST' })
    const { res } = getMockRes()
    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.send).toHaveBeenCalledWith('Invalid CSRF Token')
  })
  it('should return a 400 if data is missing in the payload', async () => {
    expect.assertions(2)
    process.env.TEST_ENV_SKIP_CSURF = 'true'
    const req = getMockReq({ method: 'POST', body: { _csrf: '' } })
    const { res } = getMockRes()

    await handler(req, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.send).toHaveBeenCalledWith('Missing required fields: name, email, message')
  })
})
