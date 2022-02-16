import { createSprinkles } from '@vanilla-extract/sprinkles'
import { responsive } from './responsive.css'
import { text } from './text.css'

export const sprinkles = createSprinkles(responsive, text)
