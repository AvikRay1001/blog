import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

// const MenuPosts = ({ withImage }) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchType = withImage ? "editors-pick" : "most-views";
//     console.log("Fetching posts for type:", fetchType);

//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/popular?type=${fetchType}`);
//         console.log(response);
//         const data = await response.json();
//         console.log("Response is:", data);
//         setPosts(data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, [withImage]);

const getData = async ({ withImage }) => {
  try {
    const fetchType = withImage ? "editors-pick" : "most-views";
    console.log("Fetching posts for type:", fetchType);

    const res = await fetch(`http://localhost:3000/api/popular?type=${fetchType}`,
    {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed");
    }

    const jsonData = await res.json();
    console.log(jsonData);

    return jsonData;

  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return []; 
  }
};


const MenuPosts = async({ withImage }) => {

  const data = await getData(withImage);
  console.log("Data:",data);

  return (
    <div className={styles.items}>
      {data.posts.map((item) => (
        <Link href='/' key={item.id} className={styles.item}>
          {withImage && item.img && (
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>
              {item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.userEmail}</span>
              <span className={styles.date}>
                {" - "}
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
