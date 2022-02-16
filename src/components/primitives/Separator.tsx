import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { separator, SeparatorVariants } from './Separator.css'

type Props = SeparatorVariants & {}

export function Separator(props: Props) {
  return <SeparatorPrimitive.Root className={separator({ size: props.size })} />
}
