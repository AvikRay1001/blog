import React from 'react'
import styles from './sideBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const SideBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebarWrapper}>
                <Link href='/admin/addProduct' className={styles.component}>
                    <IoIosAddCircleOutline size={30}/><p>Add Blog</p>
                </Link>
                <Link href='/admin/blogList' className={styles.component}>
                    <FaListUl size={30}/><p>Blog List</p>
                </Link>
                <Link href='/admin/subscriptions' className={styles.component}>
                    <CiMail size={30}/><p>Subscriptions</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SideBar
