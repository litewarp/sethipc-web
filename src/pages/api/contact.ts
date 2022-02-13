// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { csrf } from '@/lib/csrf'

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
  const { name, email, message } = req.body

  if (!name) missingFields.push('name')
  if (!email) missingFields.push('email')
  if (!message) missingFields.push('message')

  if (missingFields.length > 0) {
    return res.status(400).send(`Missing required fields: ${missingFields.join(', ')}`)
  }

  res.status(200).json({ name: 'John Doe' })
}
