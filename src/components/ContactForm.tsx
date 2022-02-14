import { Form } from 'react-final-form'
import {
  SubmitButton,
  StyledForm,
  InputField,
  StatusMessage,
  ErrorMessage
} from './forms'
import * as yup from 'yup'
import { useValidationSchema } from './forms/useValidationSchema'
import { Contact, useNewContactMutation } from '@/hooks/useNewContact'
import { Box } from './primitives'

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
        <StyledForm onSubmit={handleSubmit}>
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
          <SubmitButton
            css={{
              marginLeft: 'auto',
              width: 150,
              '@bp2': { marginRight: 50 }
            }}
            type="submit"
          >
            Submit
          </SubmitButton>
          <Box css={{ minHeight: 18, display: status === 'error' ? 'block' : 'none' }}>
            <ErrorMessage>{error as string}</ErrorMessage>
          </Box>
        </StyledForm>
      )}
    </Form>
  )
}
