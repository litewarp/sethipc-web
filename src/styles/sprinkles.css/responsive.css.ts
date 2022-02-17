import { createVar } from '@vanilla-extract/css'
import {
  defineProperties,
  createSprinkles,
  ConditionalValue
} from '@vanilla-extract/sprinkles'
import { vars } from '../vars.css'

export const responsive = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': vars.screens.tablet },
    desktop: { '@media': vars.screens.desktop },
    wide: { '@media': vars.screens.wide }
  },
  defaultCondition: 'mobile',
  properties: {
    boxSizing: ['border-box'],
    gap: vars.space,
    gapY: vars.space,
    gapX: vars.space,
    color: vars.colors,
    backgroundColor: vars.colors,
    display: ['none', 'flex', 'block', 'inline-block', 'inline-flex', 'grid'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between'
    ],
    flexShrink: [0, 1],
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
    width: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    gridTemplateRows: vars.grid,
    gridTemplateColumns: vars.grid
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
    gridRows: ['gridTemplateRows'],
    gridColumns: ['gridTemplateColumns'],
    bg: ['backgroundColor']
  }
})

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsive,
  Value
>
