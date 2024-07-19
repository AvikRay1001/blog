import React from 'react'
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';

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
    return []; // Return an empty array in case of failure
  }
};

const CardList = async() => {

  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
