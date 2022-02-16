import * as styles from './SethiPCLogo.css'

type Props = styles.SethiPCLogoVariants & React.HTMLProps<HTMLParagraphElement>

export function SethiPCLogo(props: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.logoText()}>Sethi P.C.</p>
    </div>
  )
}
