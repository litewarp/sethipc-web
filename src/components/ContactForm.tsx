import { Form, Field } from 'react-final-form'
import { Fieldset, Label, Input, SubmitButton, StyledForm, TextArea } from './FormFields'

interface Props {
  csrfToken: string
}

export function ContactForm(props: Props) {
  return (
    <Form
      onSubmit={(values, actions) => {
        window.alert(JSON.stringify(values, null, 2))
      }}
      initialValues={{ name: '', email: '', message: '', _csrf: props.csrfToken }}
    >
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Fieldset>
            <Label>Name</Label>
            <Field
              name="name"
              component={Input}
              type="text"
              placeholder="John C. Client"
            />
          </Fieldset>
          <Fieldset>
            <Label>Email</Label>
            <Field
              name="email"
              component={Input}
              type="email"
              placeholder="john@helpme.org"
            />
          </Fieldset>
          <Fieldset>
            <Label>Message</Label>
            <Field
              name="message"
              component={TextArea}
              type="text"
              placeholder="Enter Message Here ..."
              rows={10}
            />
          </Fieldset>
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
