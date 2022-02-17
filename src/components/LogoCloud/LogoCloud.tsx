import * as styles from './LogoCloud.css'

interface Logos {
  src: string
  alt: string
}

export const logos: Logos[] = [
  {
    src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
    alt: 'Workcation'
  },
  {
    src: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    alt: 'StaticKit'
  },
  {
    src: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
    alt: 'Mirage'
  },
  {
    src: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
    alt: 'Tuple'
  },
  {
    src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
    alt: 'Workcation'
  },
  {
    src: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    alt: 'StaticKit'
  }
]

export interface Props {
  logos: Logos[]
  title: string
}

export function LogoCloud(props: Props) {
  const { logos, title } = props
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title.toUpperCase()}</p>
      <div className={styles.logosContainer}>
        {logos.map((logo) => (
          <div className={styles.logo} key={logo.alt}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.image} src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
