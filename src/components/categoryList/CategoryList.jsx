"use client"

import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed");
    }

    const jsonString = await res.json(); // Get the raw JSON string
    const jsonData = JSON.parse(jsonString); // Parse the JSON string into JS object/array

    if (!Array.isArray(jsonData)) {
      console.warn("Expected an array, got:", jsonData);
      return []; // Safely return an empty array if not an array
    }

    return jsonData;

  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return []; 
  }
};


const CategoryList = () => {
 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getData();
      setData(categories);
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;