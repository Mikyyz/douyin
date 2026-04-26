import { FC } from 'react'
import SearchBar from '@/components/SearchBar'
import HeaderMenu from '@/components/HeaderMenu'

import styles from "./index.module.scss"

const PageHeader: FC = () => {
  return (
    <div className={styles.pageHeader}>
      <div style={{ flex: 0.83 }}></div>
      <SearchBar />
      <HeaderMenu />
    </div>
  )
}

export default PageHeader