// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { csrf } from '@/lib/csrf'
import { sendContactEmail } from '@/lib/sendgrid'

type Data = {} | string

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method not allowed')
  }

  try {
    await csrf(req, res)
  } catch (e) {
    return res.status(401).send('Invalid CSRF Token')
  }

  const missingFields: string[] = []
  const { name, email, message } = JSON.parse(req.body)

  if (!name) missingFields.push('name')
  if (!email) missingFields.push('email')
  if (!message) missingFields.push('message')

  if (missingFields.length > 0) {
    return res.status(400).send(`Missing required fields: ${missingFields.join(', ')}`)
  }

  try {
    // send me an email!
    await sendContactEmail({
      name,
      email,
      message
    })
    res.status(200).json({ success: true })
  } catch (e) {
    console.error(e)
    const response: { body: string } | undefined = (e as any).response
    if (response) console.error(response.body)
    res.status(500).json({ success: false, message: e })
  }
}
