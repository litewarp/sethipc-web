import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/styles'

const { colors, sizes } = vars

export const iconButton = recipe({
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    fontSize: '14px',
    justifyContent: 'center',
    lineHeight: '1',
    outline: 'none',
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    color: colors.textPrimary,
    backgroundColor: colors.bgSecondary,
    border: `2px solid ${colors.slate7}`,
    selectors: {
      '&:hover': {
        borderColor: colors.slate8
      },
      '&:active': {
        backgroundColor: colors.slate2
      },
      '&:focus': {
        borderColor: colors.slate8,
        boxShadow: `0 0 0 1px ${colors.slate8}`
      },
      '&:disabled': {
        pointerEvents: 'none',
        backgroundColor: 'transparent',
        color: colors.slate6
      }
    }
  },
  variants: {
    size: {
      '1': {
        borderRadius: sizes[1],
        height: sizes[5],
        width: sizes[5]
      },
      '2': {
        borderRadius: sizes[2],
        height: sizes[6],
        width: sizes[6]
      },
      '3': {
        borderRadius: sizes[2],
        height: sizes[7],
        width: sizes[7]
      },
      '4': {
        borderRadius: sizes[3],
        height: sizes[8],
        width: sizes[8]
      }
    },
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        selectors: {
          '&:hover': {
            backgroundColor: colors.slate3
          },
          '&:focus': {
            boxShadow: `inset 0 0 0 1px ${colors.slate8}`
          },
          '&:active': {
            backgroundColor: colors.slate4
          },
          '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
            {
              backgroundColor: colors.slate4
            }
        }
      },
      raised: {
        boxShadow:
          '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        selectors: {
          '&:hover': {
            boxShadow:
              '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)'
          },
          '&:focus': {
            borderColor: colors.slate8,
            boxShadow: `0 0 0 1px ${colors.slate8}, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)`
          },
          '&:active': {
            backgroundColor: colors.slate4
          }
        }
      }
    },
    state: {
      active: {
        backgroundColor: colors.slate4,
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        selectors: {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)'
          },
          '&:active': {
            backgroundColor: colors.slate4
          }
        }
      },
      waiting: {
        backgroundColor: colors.slate4,
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        selectors: {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)'
          },
          '&:active': {
            backgroundColor: colors.slate4
          }
        }
      }
    }
  },
  defaultVariants: {
    size: '1',
    variant: 'ghost'
  }
})

export type IconButtonVariants = RecipeVariants<typeof iconButton>
