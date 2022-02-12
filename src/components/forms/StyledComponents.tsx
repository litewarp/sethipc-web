import { css, styled } from '@/stitches.config'

export const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15
})

export const Label = styled('label', {
  fontSize: 15,
  color: '$indigo11',
  width: 90,
  textAlign: 'right'
})

const inputObj = {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: '$slate11',
  boxShadow: `0 0 0 1px $colors$indigo7`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px $colors$indigo8` }
}

export const inputStyle = css(inputObj)
export const Input = styled('input', inputObj)

const textAreaObj = {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '10px',
  fontSize: 15,
  lineHeight: 1,
  color: '$slate11',
  boxShadow: `0 0 0 1px $colors$indigo7`,
  height: 'auto',
  resize: 'vertical',

  '&:focus': { boxShadow: `0 0 0 2px $colors$indigo8` }
}
export const textAreaStyle = css(textAreaObj)
export const TextArea = styled('textarea', textAreaObj)

export const SubmitButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  maxWidth: 200,
  backgroundColor: '$indigo4',
  color: '$indigo11',
  boxShadow: `0 2px 10px $blackA7`,
  '&:hover': { backgroundColor: '$colors$indigo5' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$indigo7` }
})

export const StyledForm = styled('form', {
  all: 'unset',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3'
})
