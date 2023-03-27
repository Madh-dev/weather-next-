import React from 'react'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Search from '@/components/search/Search'
import Today from '@/components/today/Today'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Search />
      <Today />
    </main>
  )
}
