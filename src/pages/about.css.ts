import { sprinkles, vars } from '@/styles'
import { responsiveStyle } from '@/styles/responsiveStyle'
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
      ...responsiveStyle({
        mobile: {
          gridColumn: '1 / span 4'
        },
        tablet: {
          gridColumn: '1 / span 2',
          gridRow: '2 / span 2'
        }
      })
    },
    sprinkles({
      borderRadius: 'md',
      marginX: 'auto',
      paddingX: {
        mobile: 'sm',
        tablet: 'lg'
      },
      width: '80%'
    })
  ],
  bioRight: [
    gridItemBase,
    {
      alignItems: 'start',
      ...responsiveStyle({
        mobile: {
          gridColumn: '1 / span 4',
          gridRow: '3 / span 1',
          paddingLeft: 'sm',
          paddingRight: 'sm'
        },
        tablet: {
          gridColumn: '3 / span 2',
          gridRow: '2 / 4',
          paddingRight: 'lg',
          paddingLeft: 'lg'
        }
      })
    }
  ],
  bottom: [
    {
      gridColumn: '1 / span 4',
      gridRow: '4 / 4'
    },
    sprinkles({
      padding: 'md',
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

export const grid = style({
  display: 'grid',
  gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
  gridTemplateColumns: 'repeat(4, minmax(4, 1fr))',
  gap: '.5em'
})
