import { createSprinkles } from '@vanilla-extract/sprinkles'
import { responsive, ResponsiveValue } from './responsive.css'
import { text, TextValue } from './text.css'

export const sprinkles = createSprinkles(responsive, text)

export type Sprinkles = Parameters<typeof sprinkles>[0]
