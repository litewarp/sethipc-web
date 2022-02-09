import { globalCss } from '@/stitches.config'
// https://github.com/hauptrolle/stitches-reset/blob/master/src/index.ts
// plus
// https://www.joshwcomeau.com/css/custom-css-reset/
const cssReset = {
  /**
   * Use a more-intuitive box-sizing model
   */
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  /**
   * Remove default margins, padding, and borders
   */
  '*': {
    margin: '0',
    padding: '0',
    border: '0'
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section':
    {
      display: 'block'
    },
  /**
   * Reset list-styles
   */
  'ol, ul': {
    listStyle: 'none'
  },
  'blockquote, q': {
    quotes: 'none'
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // @ts-ignore
    content: 'none'
  },
  table: {
    borderSpacing: '0'
  },
  /**
   * Allow percentage-based heights in the application
   */
  'html, body': {
    height: '100%'
  },
  /**
   * Typographic tweaks!
   * Add accessible line-height
   * Improve text rendering
   */
  body: {
    lineHeight: '1.5',
    '-webkit-font-smoothing': 'antialiased'
  },
  /**
   * Improve media defaults
   */
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
  /**
   * Remove built-in form typography styles
   */
  'input, button, textarea, select': {
    font: 'inherit'
  },
  /**
   * Avoid text overflows
   */
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'breakWord'
  },
  /**
   * Create a root stacking context
   */
  '#root, #__next': {
    isolation: 'isolate'
  }
}

const styles = () => {
  globalCss(cssReset)()
  globalCss({
    body: {
      fontFamily: '$default'
    }
  })
}

export default styles
