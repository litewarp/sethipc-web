import React from 'react'
import { useField } from 'react-final-form'
import { Fieldset, Label, textAreaStyle, inputStyle } from './StyledComponents'
import { ErrorTooltip } from './ErrorTooltip'
import { styled } from '@/stitches.config'

type Props = {
  fieldName: string
  label: string
  component: 'input' | 'textarea'
} & React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>

export function InputField(props: Props) {
  const { fieldName, label, component, ...rest } = props
  const { input, meta } = useField(fieldName)

  return (
    <Fieldset>
      <Label>{props.label}</Label>
      {component === 'input' ? (
        <input
          {...(rest as React.HTMLProps<HTMLInputElement>)}
          {...input}
          className={inputStyle()}
        />
      ) : component === 'textarea' ? (
        <textarea
          rows={10}
          {...(rest as React.HTMLProps<HTMLTextAreaElement>)}
          {...input}
          className={textAreaStyle()}
        />
      ) : null}
      <span style={{ width: 35 }}>
        {meta.error && meta.touched ? <ErrorTooltip error={meta.error} /> : null}
      </span>
    </Fieldset>
  )
}
