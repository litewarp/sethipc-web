import { Form } from 'react-final-form'
import { InputField } from '../forms'
import * as yup from 'yup'
import { useValidationSchema } from '../forms/useValidationSchema'
import { Contact, useNewContactMutation } from '@/hooks/useNewContact'
import * as styles from './ContactForm.css'

interface Props {
  csrfToken: string
  onSuccess: () => void
}

const validationSchema = yup.object({
  name: yup.string().required('Your name is required'),
  email: yup
    .string()
    .required('Your email address is required')
    .email('Invalid email address'),
  message: yup.string().min(50, 'Message of 50 characters required')
})

export function ContactForm(props: Props) {
  const { csrfToken, onSuccess } = props
  const validate = useValidationSchema<Contact>(validationSchema)
  const { mutate, status, error } = useNewContactMutation({ onSuccess })
  const onSubmit = (values: Contact) => mutate(values)
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ name: '', email: '', message: '', _csrf: csrfToken }}
      validate={validate}
    >
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <InputField
            fieldName="name"
            label="Name"
            component="input"
            type="name"
            placeholder="e.g., John Hamm"
          />
          <InputField
            fieldName="email"
            label="Email"
            component="input"
            type="email"
            placeholder="john@hamburgler.com"
          />
          <InputField
            fieldName="message"
            label="Message"
            component="textarea"
            placeholder="Enter message here ..."
          />
          <button className={styles.submitButton} type="submit">
            Submit
          </button>
          <div className={styles.errorMessageContainer}>
            <p className={styles.errorMessage[error ? 'error' : 'none']}>
              {error as string}
            </p>
          </div>
        </form>
      )}
    </Form>
  )
}
