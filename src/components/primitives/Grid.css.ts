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
      1: {
        gap: vars.space[1]
      },
      2: {
        gap: vars.space[2]
      },
      3: {
        gap: vars.space[3]
      },
      4: {
        gap: vars.space[4]
      },
      5: {
        gap: vars.space[5]
      },
      6: {
        gap: vars.space[6]
      },
      7: {
        gap: vars.space[7]
      },
      8: {
        gap: vars.space[8]
      },
      9: {
        gap: vars.space[9]
      }
    },
    gapX: {
      1: {
        columnGap: vars.space[1]
      },
      2: {
        columnGap: vars.space[2]
      },
      3: {
        columnGap: vars.space[3]
      },
      4: {
        columnGap: vars.space[4]
      },
      5: {
        columnGap: vars.space[5]
      },
      6: {
        columnGap: vars.space[6]
      },
      7: {
        columnGap: vars.space[7]
      },
      8: {
        columnGap: vars.space[8]
      },
      9: {
        columnGap: vars.space[9]
      }
    },
    gapY: {
      1: {
        rowGap: vars.space[1]
      },
      2: {
        rowGap: vars.space[2]
      },
      3: {
        rowGap: vars.space[3]
      },
      4: {
        rowGap: vars.space[4]
      },
      5: {
        rowGap: vars.space[5]
      },
      6: {
        rowGap: vars.space[6]
      },
      7: {
        rowGap: vars.space[7]
      },
      8: {
        rowGap: vars.space[8]
      },
      9: {
        rowGap: vars.space[9]
      }
    }
  }
})
