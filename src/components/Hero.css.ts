import { sectionBase } from '@/components/primitives/Section/Section.css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles, vars } from '@/styles'
import { style } from '@vanilla-extract/css'
import { heading } from './primitives/Heading/Heading.css'

export const heroSection = style([
  sectionBase,
  sprinkles({
    paddingY: {
      mobile: 2,
      tablet: 3
    },
    paddingTop: {
      mobile: 3,
      tablet: 6
    }
  })
])

export const titleContainer = sprinkles({
  textAlign: { tablet: 'center' },
  paddingBottom: 4
})
