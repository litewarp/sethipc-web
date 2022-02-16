import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { vars } from '../vars.css'

export const responsive = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' }
  },
  defaultCondition: 'mobile',
  properties: {
    boxSizing: ['border-box'],
    gap: vars.space,
    display: ['none', 'flex', 'block', 'inline-block', 'inline-flex'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    flexShrink: [0],
    alignItems: ['stretch', 'start', 'center', 'end'],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginLeft: vars.space,
    marginRight: vars.space,
    marginBottom: vars.space,
    maxWidth: ['430px', '715px', '1145px', 'none'],
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    width: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems']
  }
})
