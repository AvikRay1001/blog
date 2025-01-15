"use client"

import React, { useState } from "react";
import styles from "./writePage.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { FaUpload } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {

  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/app/utils/firebase";
import { useEffect } from "react";

const storage = getStorage(app);

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setopen] = useState(false);
  const [media, setmedia] = useState("");
  const [value, setvalue] = useState("");
  const [file, setfile] = useState(null);
  const [title, settitle] = useState("");
  const [catSlug, setcatSlug] = useState("");

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setmedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async() => {
    const res = await fetch("/api/posts",{
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug
      }),
    })
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => settitle(e.target.value)}
      />
      <select className={styles.select} onChange={(e) => setcatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setopen(!open)}>
          <IoIosAddCircleOutline size={30} className={styles.image} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setfile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <CiImageOn size={20} className={styles.image} />
              </label>
            </button>
            <button className={styles.addButton}>
              <FaUpload size={20} className={styles.image} />
            </button>
            <button className={styles.addButton}>
              <MdOutlineOndemandVideo size={20} className={styles.image} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setvalue}
          placeholder="Tell your story...."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  );
};

export default WritePage;
