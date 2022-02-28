import clsx from 'clsx'

import * as resetStyles from './reset.css'
import { sprinkles } from './sprinkles.css'

type Sprinkles = Parameters<typeof sprinkles>[0]

export type Atoms = Sprinkles & {
  reset?: resetStyles.Element & keyof JSX.IntrinsicElements
}

export const atoms = ({ reset, ...rest }: Atoms) => {
  const sprinklesClasses = sprinkles(rest)

  return clsx(reset && [resetStyles.base, resetStyles.element[reset]], sprinklesClasses)
}
