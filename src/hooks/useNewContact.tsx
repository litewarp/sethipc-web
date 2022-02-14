import { useMutation } from 'react-query'

export type Contact = {
  email: string
  name: string
  message: string
  _csrf: string
}

export function useNewContactMutation(args: { onSuccess: () => void }) {
  return useMutation(
    async (contact: Contact) => {
      const res = await fetch('/api/contact', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'applicaton/json',
          'csrf-token': contact._csrf
        },
        body: JSON.stringify(contact)
      })

      if (!res.ok) {
        throw new Error(`${res.status} - ${res.statusText}`)
      }
    },
    {
      onSuccess: args.onSuccess
    }
  )
}
