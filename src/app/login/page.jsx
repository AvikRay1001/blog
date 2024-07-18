"use client"

import React from 'react'
import styles from './loginPage.module.css'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'



const LoginPage = () => {
  const {data,status} = useSession();

  const router = useRouter();


  if(status === 'loading'){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status === 'authenticated'){
    router.push("/")
  }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={() => signIn("google")}>
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
