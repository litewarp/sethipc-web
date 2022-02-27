/**
 * Inspired by
 * https://github.com/mirror-xyz/degen/blob/main/components/src/css/injectedStyles.ts
 */

// inject an aspect ratio fallback

import { aspectRatioFallback } from './aspectRatio.css'
import { Sprinkles } from './sprinkles.css'

const injectedStyleRules = ['aspectRatio'] as const

// includes the right aspect ratio className
export function overrideAspectRatio(rules: Sprinkles): string[] {
  if (rules.aspectRatio && rules.aspectRatio !== 'auto') {
    return [aspectRatioFallback({ ratio: rules.aspectRatio })]
  }
  return []
}
