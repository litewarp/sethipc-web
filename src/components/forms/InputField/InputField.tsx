import React from 'react'
import { useField } from 'react-final-form'
import { ErrorTooltip } from '../ErrorTooltip/ErrorTooltip'
import * as styles from './InputField.css'

type Props = {
  fieldName: string
  label: string
  component: 'input' | 'textarea'
} & React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>

export function InputField(props: Props) {
  const { fieldName, label, component, ...rest } = props
  const { input, meta } = useField(fieldName)

  return (
    <fieldset className={styles.fieldset}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>{props.label}</label>
        <span className={styles.tooltipSpanMobile}>
          <ErrorTooltip error={meta.touched ? meta.error : undefined} />
        </span>
      </div>
      {component === 'input' ? (
        <input
          {...(rest as React.HTMLProps<HTMLInputElement>)}
          {...input}
          className={styles.input}
        />
      ) : component === 'textarea' ? (
        <textarea
          rows={10}
          {...(rest as React.HTMLProps<HTMLTextAreaElement>)}
          {...input}
          className={styles.textArea}
        />
      ) : null}
      <span className={styles.tooltipSpanTablet}>
        <ErrorTooltip error={meta.touched ? meta.error : undefined} />
      </span>
    </fieldset>
  )
}
