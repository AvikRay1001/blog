import React from 'react'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'
import styles from'./blogPage.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList/>
      </div>
    </div>
  )
}

export default page
