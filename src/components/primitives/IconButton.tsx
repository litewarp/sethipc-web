import { iconButton, IconButtonVariants } from './IconButton.css'

type Props = IconButtonVariants &
  Omit<React.HTMLProps<HTMLButtonElement>, 'type'> & {
    type?: 'button' | 'submit'
  }

export function IconButton(props: Props) {
  const { size, variant, state, ...rest } = props
  return (
    <button {...rest} className={iconButton({ size, variant, state })}>
      {props.children}
    </button>
  )
}
