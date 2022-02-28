import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/styles/vars.css'

export const grid = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'grid'
  },
  variants: {
    align: {
      start: {
        alignItems: 'start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'end'
      },
      stretch: {
        alignItems: 'stretch'
      },
      baseline: {
        alignItems: 'baseline'
      }
    },
    justify: {
      start: {
        justifyContent: 'start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'end'
      },
      between: {
        justifyContent: 'space-between'
      }
    },
    flow: {
      row: {
        gridAutoFlow: 'row'
      },
      column: {
        gridAutoFlow: 'column'
      },
      dense: {
        gridAutoFlow: 'dense'
      },
      rowDense: {
        gridAutoFlow: 'row dense'
      },
      columnDense: {
        gridAutoFlow: 'column dense'
      }
    },
    columns: {
      1: {
        gridTemplateColumns: 'repeat(1, 1fr)'
      },
      2: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      3: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      },
      4: {
        gridTemplateColumns: 'repeat(4, 1fr)'
      }
    },
    rows: {
      1: {
        gridTemplateRows: 'repeat(1, 1fr)'
      },
      2: {
        gridTemplateRows: 'repeat(2, 1fr)'
      },
      3: {
        gridTemplateRows: 'repeat(3, 1fr)'
      },
      4: {
        gridTemplateRows: 'repeat(4, 1fr)'
      }
    },
    gap: {
      px: '1px',
      1: {
        gap: '.25rem'
      },
      2: {
        gap: '.5rem'
      },
      3: {
        gap: '.75rem'
      },
      4: {
        gap: '1rem'
      },
      5: {
        gap: '1.25rem'
      }
    },
    gapX: {
      px: '1px',
      1: {
        gap: '.25rem'
      },
      2: {
        gap: '.5rem'
      },
      3: {
        gap: '.75rem'
      },
      4: {
        gap: '1rem'
      },
      5: {
        gap: '1.25rem'
      }
    },
    gapY: {
      px: '1px',
      1: {
        gap: '.25rem'
      },
      2: {
        gap: '.5rem'
      },
      3: {
        gap: '.75rem'
      },
      4: {
        gap: '1rem'
      },
      5: {
        gap: '1.25rem'
      }
    }
  }
})
