import { sprinkles, vars } from '@/styles'
import { style, styleVariants } from '@vanilla-extract/css'

export const gridItemBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
})

export const gridItem = styleVariants({
  title: [gridItemBase, { gridColumn: '1 / span 4', gridRow: '1 / span 1' }],
  bioLeft: [
    gridItemBase,
    {
      gridColumn: '1 / span 4',
      gridRow: '2 / span 1',
      '@media': {
        [vars.screens.tablet]: {
          gridColumn: '1 / span 2',
          gridRow: '2 / span 2'
        }
      }
    },
    sprinkles({
      borderRadius: 2,
      marginX: 'auto',
      paddingX: {
        mobile: 2,
        tablet: 6
      },
      width: '80%'
    })
  ],
  bioRight: [
    gridItemBase,
    {
      gridColumn: '1 / span 4',
      gridRow: '3 / span 1',
      paddingX: 2,
      alignItems: 'start',
      '@media': {
        [vars.screens.tablet]: {
          gridColumn: '3 / span 2',
          gridRow: '2 / 4',
          paddingX: 6
        }
      }
    }
  ],
  bottom: [
    {
      gridColumn: '1 / span 4',
      gridRow: '4 / 4'
    },
    sprinkles({
      padding: 4,
      display: 'flex',
      justifyContent: 'center'
    })
  ]
})

export const bioLeftInner = style([
  {
    backgroundColor: vars.colors.slate2,
    height: '100%',
    width: '100%',
    color: vars.colors.slate6,
    borderRadius: 4
  },
  sprinkles({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
])
