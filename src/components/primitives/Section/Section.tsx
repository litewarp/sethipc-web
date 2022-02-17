import * as styles from './Section.css'

type Props = styles.SectionVariant & React.HTMLProps<HTMLDivElement>

export function Section(props: Props) {
  const { size, children, ...rest } = props
  return <div className={styles.section({ size })}>{children}</div>
}
