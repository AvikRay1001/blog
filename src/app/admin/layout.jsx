import SideBar from "@/components/Admin/SideBar";
import styles from "./layout.module.css"
import Image from "next/image";

export default function Layout({children}){
    return (
        <>
            <div className={styles.container}>
                <SideBar/>
                <div className={styles.adminWrapper}>
                    <div className={styles.adminNav}>
                        <h3 className={styles.title}>Admin Panel</h3>
                        <Image src='/p1.jpeg' alt="" width={40} height={40} className={styles.image}/>
                    </div>
                    {children}
                </div>
            </div>
           
        </>

    )
}
