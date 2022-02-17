import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css'
// https://github.com/hauptrolle/stitches-reset/blob/master/src/index.ts
// plus
// https://www.joshwcomeau.com/css/custom-css-reset/

/**
 * Use a more-intuitive box-sizing model
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box'
})

/**
 * Remove default margins, padding, and borders
 */
globalStyle('*', {
  margin: '0',
  padding: '0',
  border: '0'
})

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section',
  {
    display: 'block'
  }
)

/**
 * Reset list-styles
 */
globalStyle('ol, ul', {
  listStyle: 'none'
})

globalStyle('blockquote, q', {
  quotes: 'none'
})

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: '',
  //@ts-ignore
  content: 'none'
})

globalStyle('table', {
  borderSpacing: '0'
})

/**
 * Allow percentage-based heights in the application
 */
globalStyle('html, body', {
  height: '100%',
  margin: 0,
  minHeight: '100vh',
  backgroundColor: vars.colors.bgSecondary,
  color: vars.colors.textPrimary,
  fontFamily: vars.fonts.default
})
/**
 * Typographic tweaks!
 * Add accessible line-height
 * Improve text rendering
 */
globalStyle('body', {
  lineHeight: '1.5',
  WebkitFontSmoothing: 'antialiased'
})

/**
 * Improve media defaults
 */
globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%'
})

/**
 * Remove built-in form typography styles
 */
globalStyle('input, button, textarea, select', {
  font: 'inherit'
})

/**
 * Avoid text overflows
 */
globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word'
})

/**
 * Create a root stacking context
 */
globalStyle('#root, #__next', {
  isolation: 'isolate'
})
