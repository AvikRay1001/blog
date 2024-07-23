import React from 'react'
import CardList from '@/components/cardList/CardList'
// import Menu from '@/components/Menu/Menu'
import styles from'./blogPage.module.css'

const page = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;
  console.log(cat);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
      </div>
    </div>
  )
}

export default page
