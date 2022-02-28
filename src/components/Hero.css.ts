import { sectionBase } from '@/components/primitives/Section/Section.css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles, vars } from '@/styles'
import { style } from '@vanilla-extract/css'

export const heroSection = style([
  sectionBase,
  sprinkles({
    paddingY: {
      mobile: 'sm',
      tablet: 'md'
    },
    paddingTop: {
      mobile: 'md',
      tablet: 'lg'
    }
  })
])

export const titleContainer = sprinkles({
  textAlign: { tablet: 'center' },
  paddingBottom: 'lg'
})
