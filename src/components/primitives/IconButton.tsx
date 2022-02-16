import { iconButton, IconButtonVariants } from './IconButton.css'

type ButtonProps = IconButtonVariants &
  Omit<React.HTMLProps<HTMLButtonElement>, 'type'> & {
    type?: 'button' | 'submit'
  }

export function IconButton(props: ButtonProps) {
  const { size, variant, state, ...rest } = props
  return (
    <button {...rest} className={iconButton({ size, variant, state })}>
      {props.children}
    </button>
  )
}

type AnchorProps = IconButtonVariants & React.HTMLProps<HTMLAnchorElement>

export function IconAnchor(props: AnchorProps) {
  const { size, variant, state, ...rest } = props
  return (
    <a {...rest} className={iconButton({ size, variant, state })}>
      {props.children}
    </a>
  )
}
