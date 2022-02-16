import { defineProperties } from '@vanilla-extract/sprinkles'
import { vars } from '../vars.css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '.'

export const text = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    fontSize: vars.sizes,
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    lineHeight: ['20px', '23px', '25px', '30px', '33px', '35px', '41px', '55px'],
    letterSpacing: ['-.015em', '-.016em', '-.031em', '-.034em', '-.055em'],
    textIndent: ['-.005em', '-.005em', '-.018em', '-.025em'],
    textAlign: ['right', 'center', 'left']
  }
})
