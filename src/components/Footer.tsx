import React from 'react'
import { Separator } from './primitives'
import { Email, Github, Twitter } from './ContactMethods'
import * as styles from './Footer.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topDiv}>
        <Separator className={styles.separator} />
      </div>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <p>&#169; {new Date().getFullYear()} Sethi P.C.</p>
          <div className={styles.logoContainer}>
            <Twitter />
            <Github />
            <Email />
          </div>
        </div>
      </div>
    </footer>
  )
}
