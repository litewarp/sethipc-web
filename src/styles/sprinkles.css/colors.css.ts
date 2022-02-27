import { defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from '..'
import { darkTheme } from '../colors.css'

export const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { selector: `.${darkTheme}` }
  },
  defaultCondition: 'lightMode',
  properties: {
    color: vars.colors,
    background: vars.colors,
    border: vars.border,
    borderLeft: vars.border,
    borderTop: vars.border,
    borderBottom: vars.border,
    borderRight: vars.border,
    boxShadow: vars.boxShadow,
    textShadow: vars.textShadow,
    fill: vars.colors,
    stroke: vars.colors
  }
})
