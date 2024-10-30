"use client"

import React from 'react'
import styles from './featured.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';


const Featured = () => {
  const {data: session, status} = useSession();


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, {" "} 
          {status === "loading" ? (
            "Guest"
          ) : (
             session?.user?.name || " Guest"
          )} {"there!"} </b> Discover your journey.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to BlogTimes: A Space for Curiosity and Connection</h1>
          <p className={styles.postDesc}>
          Join us on BlogTimes—a blog created for curious minds eager to explore, learn, and connect. Here, you’ll find insights on tech, lifestyle, culture, and more, crafted by our passionate team. Dive into engaging stories, practical guides, and thought-provoking ideas designed to inspire and inform. Let’s start this journey together!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Featured
