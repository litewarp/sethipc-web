import { styled, css } from '@/stitches.config'

export const anchorIcon = css({
  flexShrink: 0,
  height: 25,
  width: 25,
  variants: {
    current: {
      true: {
        color: '$slate12'
      },
      false: {
        color: '$slate11',
        '&:hover': {
          color: '$slate12'
        }
      }
    }
  }
})

export const icon = css({
  fontSize: '4rem'
})

export const Image = styled('img', {
  width: 200
})

export const NavAnchor = styled('a', {
  display: 'flex',
  ai: 'center',
  p: '$2',
  fontSize: '$lg',
  fontWeight: 600,
  borderRadius: '$sm',
  variants: {
    current: {
      true: {
        color: '$slate12',
        bc: '$slate1'
      },
      false: {
        color: '$slate11',
        bc: '$slate2',
        '&:hover': {
          color: '$slate1',
          bc: '$slate3'
        }
      }
    }
  }
})

export const Heading = styled('h2', {
  color: '$slate11',
  marginLeft: '$8',
  fontWeight: 800,
  fontSize: '$2xl'
})

export const StaticSidebarContainer = styled('div', {
  display: 'flex',
  position: 'fixed',
  inset: '0',
  flexDirection: 'column',
  width: '$4xl',
  variants: {
    hidden: { true: { display: 'none' } }
  }
})
