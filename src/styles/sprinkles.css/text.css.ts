import { ConditionalValue, defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from '../vars.css'

export const text = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': vars.screens.tablet },
    desktop: { '@media': vars.screens.desktop },
    wide: { '@media': vars.screens.wide }
  },
  defaultCondition: 'mobile',
  properties: {
    fontSize: vars.fontSizes,
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    lineHeight: ['20px', '23px', '25px', '30px', '33px', '35px', '41px', '55px'],
    letterSpacing: ['-.015em', '-.016em', '-.031em', '-.034em', '-.055em'],
    textIndent: ['-.005em', '-.005em', '-.018em', '-.025em'],
    textAlign: ['right', 'center', 'left']
  }
})
export type TextValue<Value extends string | number> = ConditionalValue<
  typeof text,
  Value
>
