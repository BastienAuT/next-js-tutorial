"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://luminous-melba-106563.netlify.app/api/posts",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt="ui"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

// import React from "react";
// import styles from "./page.module.css";
// import Link from "next/link";
// import Image from "next/image";

// async function getData() {
//   const res = await fetch(
//     "https://luminous-melba-106563.netlify.app/api/posts",
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// const Blog = async () => {
//   const data = await getData();

//   return (
//     <div className={styles.mainContainer}>
//       {data.map((item) => (
//         <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
//           <div className={styles.imageContainer}>
//             <Image
//               src={item.img}
//               alt="ui"
//               width={400}
//               height={250}
//               className={styles.image}
//             />
//           </div>
//           <div className={styles.content}>
//             <h1 className={styles.title}>{item.title}</h1>
//             <p className={styles.desc}>{item.desc}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Blog;
