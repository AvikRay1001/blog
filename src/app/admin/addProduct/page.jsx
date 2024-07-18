"use client"
import React, { useState } from 'react'
import styles from './writePage.module.css'
import Image from 'next/image'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.bubble.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { FaUpload } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'


const WritePage = () => {


  const [open, setopen] = useState(false);
  const [value, setvalue] = useState("");

  const {status} = useSession();

  const router = useRouter();


  if(status === 'loading'){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status === 'authenticated'){
    router.push("/")
  }

  return (
    <div className={styles.container}>
        <input type='text' placeholder='Title' className={styles.input}/>
        <div className={styles.editor}>
            <button className={styles.button} onClick={() => setopen(!open)}>
              <IoIosAddCircleOutline size={30} className={styles.image}/>
            </button>
            {open && (
              <div className={styles.add}>
                <button className={styles.addButton}>
                  <CiImageOn size={20} className={styles.image}/>
                </button>
                <button className={styles.addButton}>
                    <FaUpload size={20} className={styles.image}/>

                </button>
                <button className={styles.addButton}>
                  <MdOutlineOndemandVideo size={20} className={styles.image}/>

                </button>
              </div>
            )}
            <ReactQuill className={styles.textArea} theme='bubble' value={value} onChange={setvalue} placeholder="Tell your story...."/>
        </div>
        <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage;

