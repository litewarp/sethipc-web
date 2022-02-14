import { sendgrid } from './index'
import { generateEmailHtml } from './html'

type Props = {
  email: string
  name: string
  message: string
}

export async function sendContactEmail(props: Props) {
  const { email, name, message } = props
  const html = generateEmailHtml({
    title: "You've got a new message!",
    preHeader: `${name} (${email}) sent you a message`,
    paragraphOne: message,
    callToActionText: 'Reply to them',
    callToActionHref: `mailto:${email}`,
    paragraphTwo: '',
    salutation: 'Dear Nick',
    signOff: 'Cheerio!'
  })

  await sendgrid.send({
    to: 'nick@sethipc.com',
    from: 'no-reply@sethipc.com',
    subject: "You've got a new message!",
    text: `${name} (${email}) sent you a message`,
    html
  })
}
