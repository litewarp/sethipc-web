import { Form } from 'react-final-form'
import { SubmitButton, StyledForm, InputField } from './forms'
import * as yup from 'yup'
import { useValidationSchema } from './forms/useValidationSchema'

interface Props {
  csrfToken: string
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
  const validate = useValidationSchema(validationSchema)
  return (
    <Form
      onSubmit={(values, actions) => {
        window.alert(JSON.stringify(values, null, 2))
      }}
      initialValues={{ name: '', email: '', message: '', _csrf: props.csrfToken }}
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
            css={{ marginLeft: 'auto', width: 150, '@bp2': { width: 150 } }}
            type="submit"
          >
            Submit
          </SubmitButton>
        </StyledForm>
      )}
    </Form>
  )
}
