import React from 'react'
import styles from './loginPage.module.css'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>
                <div className={styles.imageContainer}>
                  <Image src="/google.png" alt='' width={50} height={50} className={styles.image}/>
                </div>
                Sign in with Google
            </div>
            <div className={styles.socialButton}>
                <div className={styles.imageContainer}>
                  <Image src="/github.png" alt='' width={50} height={50} className={styles.image}/>
                </div>
              Sign in with Github</div>
        </div>
    </div>
  )
}

export default LoginPage
