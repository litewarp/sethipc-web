import { sprinkles } from '@/styles'
import { Accordion, AccordionItem } from './Accordion'
import * as styles from './Accordion.css'

interface EducationValues {
  date: string
  degree: string
  institution: string
  items: string[]
}

const educationItems: EducationValues[] = [
  {
    date: '2009',
    degree: 'J.D.',
    institution: 'Columbia Law School',
    items: []
  },
  {
    date: '2005',
    degree: 'B.A.',
    institution: 'Northwestern University',
    items: []
  }
]

function Education() {
  return (
    <AccordionItem value="education" label="Education">
      <ul>
        {educationItems.map((ed) => (
          <div key={`${ed.institution}_${ed.date}`} className={styles.educationItem}>
            <p>{ed.date}</p>
            <p>{ed.degree}</p>
            <p>{ed.institution}</p>
            {ed.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}
      </ul>
    </AccordionItem>
  )
}

interface CredentialsValues {
  date: string
  title: string
  institution: string
  items: []
}

const credentialItems: CredentialsValues[] = [
  {
    date: '2020',
    title: 'CIPP',
    institution: 'IAPP',
    items: []
  },
  {
    date: '2021',
    title: 'CIPT',
    institution: 'IAPP',
    items: []
  }
]

function Credentials() {
  return (
    <AccordionItem value="credentials" label="Credentials">
      <ul>
        {credentialItems.map((cred) => (
          <div key={cred.title} className={styles.educationItem}>
            <p>{cred.date}</p>
            <p>{cred.title}</p>
            <p>{cred.institution}</p>
            {cred.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        ))}
      </ul>
    </AccordionItem>
  )
}

function Other() {
  return (
    <AccordionItem value="other" label="Other">
      <p>Some Other Shit</p>
    </AccordionItem>
  )
}

export function SethiBio() {
  return (
    <Accordion type="single" defaultValue="education" collapsible className={styles.root}>
      <Education />
      <Credentials />
      <Other />
    </Accordion>
  )
}
