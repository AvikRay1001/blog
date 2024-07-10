import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.contianer}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.userimage}/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe - </span> 
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" fill  className={styles.blogimage}/>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nesciunt ratione tempora eveniet esse accusamus id, eligendi libero quidem repellat reprehenderit unde incidunt exercitationem, veritatis aliquid atque consequuntur, minus ad.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum porro delectus, sit veritatis id temporibus quo asperiores, alias nobis omnis quae aspernatur tempora harum placeat consequatur ipsum, dicta laudantium quis!
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, soluta. Ea quas, ab, nemo hic libero et provident cupiditate ducimus asperiores nihil corporis dignissimos sed obcaecati eius, adipisci officia corrupti?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis eos accusamus fugiat magni amet nostrum quam saepe consequatur, natus unde laboriosam iusto veritatis facere laborum quo dolor non ad?
            </p>
          </div>
          <div className={styles.comments}>
              <Comments/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
