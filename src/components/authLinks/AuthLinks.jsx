"use client"

import React from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'
import { useState } from 'react'

const AuthLinks = () => {

  const [open, setopen] = useState(false)
  const status = "notauthenticated"

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
        ) : (
          <>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link}>Logout</span>
          </>
        )}
        <div className={styles.burger} onClick={() => setopen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        {open && (
          <div className={styles.responsiveMenu}>
            <Link href="/" className={styles.linkin}>HomePage</Link>
            <Link href="/" className={styles.linkin}>Contact</Link>
            <Link href="/" className={styles.linkin}>About</Link>
            {status === "notauthenticated" ? (
              <Link href="/login" className={styles.linkin}>Login</Link>
              ) : (
                <>
                  <Link href="/write" className={styles.linkin}>Write</Link>
                  <span className={styles.link}>Logout</span>
                </>
            )}
          </div>
        )}
    </>
  )
}

export default AuthLinks
