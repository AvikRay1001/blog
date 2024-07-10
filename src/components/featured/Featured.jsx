import React from 'react'
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Avik here!</b> Discover my stories and creative indeas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias amet obcaecati quam modi laudantium corrupti</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias a ad officiis fugiat quia pariatur itaque, molestiae rerum illo exercitationem beatae eum, cumque voluptatum laudantium temporibus excepturi dolorem explicabo ut.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
