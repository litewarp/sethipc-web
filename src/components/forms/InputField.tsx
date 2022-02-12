import React from 'react'
import { useField } from 'react-final-form'
import { Fieldset, Label, textAreaStyle, inputStyle } from './StyledComponents'
import { ErrorTooltip } from './ErrorTooltip'
import { styled } from '@/stitches.config'
import { Box, Flex } from '../primitives'

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
      <Flex css={{ height: 25, alignItems: 'center', position: 'relative' }}>
        <Label>{props.label}</Label>
        <Flex
          as="span"
          css={{
            position: 'absolute',
            left: '-35px',
            top: '0',
            width: 35,
            alignItems: 'center',
            '@bp2': { display: 'none' }
          }}
        >
          <ErrorTooltip error={meta.touched ? meta.error : undefined} />
        </Flex>
      </Flex>
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
      <Box as="span" css={{ width: 35, display: 'none', '@bp2': { display: 'block' } }}>
        <ErrorTooltip error={meta.touched ? meta.error : undefined} />
      </Box>
    </Fieldset>
  )
}
