"use client"

import React, { useContext } from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {theme, toggle} = useContext(ThemeContext);
  return (
    <div className={styles.container}
    onClick={toggle}
    style={
      theme === "light" ? {
        backgroundColor: "#0f172a"
      } : {
        backgroundColor: "white"
      }
    }
    >
      <Image src="/moon.png" alt="" width={18} height={18}/>
      <div className={styles.ball} 
      style={
        theme === "light" ?
        {right: 1, background: "white"} :
        {left: 1, background: "#0f172a"}
      }></div>
      <Image src="/sun.png" alt="" width={18} height={18}/>
    </div>
  )
}

export default ThemeToggle
