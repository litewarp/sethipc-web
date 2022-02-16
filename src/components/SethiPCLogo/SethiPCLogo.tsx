import * as styles from './SethiPCLogo.css'

type Props = styles.SethiPCLogoVariants &
  Omit<React.HTMLProps<HTMLParagraphElement>, 'size'>

export function SethiPCLogo(props: Props) {
  const { size, ...rest } = props
  return (
    <div className={styles.container}>
      <p className={styles.logoText({ size })} {...rest}>
        Sethi P.C.
      </p>
    </div>
  )
}
