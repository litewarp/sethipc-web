import { css } from '@/stitches.config'
export const srOnly = css({
  position: 'absolute',
  width: '1px',
  height: '1px',
  p: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0
})
