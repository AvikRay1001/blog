import React from 'react'
import styles from "./comment.module.css"
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
    const status = "authenticated";

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder='write a comment...' className={styles.input}></textarea>
                <button className={styles.button}>Send</button>
            </div>
        ) : (
            <Link href="/">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image
                        src="/p1.jpeg"
                        alt=''
                        width={50}
                        height={50}
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam ut voluptatem ipsa pariatur amet autem maxime error sint atque numquam rem, omnis laudantium neque velit magnam nihil mollitia nostrum!
                </p>
            </div>
            <div className={styles.border}></div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image
                        src="/p1.jpeg"
                        alt=''
                        width={50}
                        height={50}
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam ut voluptatem ipsa pariatur amet autem maxime error sint atque numquam rem, omnis laudantium neque velit magnam nihil mollitia nostrum!
                </p>
            </div>
            <div className={styles.border}></div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image
                        src="/p1.jpeg"
                        alt=''
                        width={50}
                        height={50}
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam ut voluptatem ipsa pariatur amet autem maxime error sint atque numquam rem, omnis laudantium neque velit magnam nihil mollitia nostrum!
                </p>
            </div>
            <div className={styles.border}></div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image
                        src="/p1.jpeg"
                        alt=''
                        width={50}
                        height={50}
                        className={styles.image}
                    />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsam ut voluptatem ipsa pariatur amet autem maxime error sint atque numquam rem, omnis laudantium neque velit magnam nihil mollitia nostrum!
                </p>
            </div>
            <div className={styles.border}></div>

        </div>
    </div>
  )
}

export default Comments
