import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ThemeToggle from '../components/ThemeToggle'
import { Box } from '@/components/primitives/Box'
import AppHeader, { HeaderSeparator, paths } from '@/components/Header'
import { Sidebar, SidebarToggle } from '@/components/Sidebar'

export default function HomePage() {
  return (
    <Box>
      <Sidebar paths={paths.map((path) => ({ ...path, isCurrent: false }))} />
      <AppHeader />
      <HeaderSeparator css={{ margin: '15px 0px' }} />
    </Box>
  )
}
