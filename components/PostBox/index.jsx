

import React, { useState,useEffect } from "react";
import styles from "@/styles/components/PostBox/PostBox.module.css";

const posts = [
  {
    id: 1,
    title: "Post 1",
    description: "Description of Post 1",
    price: 10,
    photo: "/ali.jpg",
  },
  {
    id: 2,
    title: "Post 2",
    description: "Description of Post 2",
    price: 20,
    photo: "/me.jpg",
  },
  {
    id: 3,
    title: "Post 3",
    description: "Description of Post 3",
    price: 30,
    photo: "/me.jpg",
	},
    {
    id: 6,
    title: "Post 1",
    description: "Description of Post 1",
    price: 10,
    photo: "/ali.jpg",
  },
  {
    id: 5,
    title: "Post 2",
    description: "Description of Post 2",
    price: 20,
    photo: "/me.jpg",
  },
  {
    id: 4,
    title: "Post 3",
    description: "Description of Post 3",
    price: 30,
    photo: "/me.jpg",
  },
];
const PostBox = () => {
  const [postCounts, setPostCounts] = useState({});

  const handleIncrement = (postId) => {
    setPostCounts((prevState) => ({
      ...prevState,
      [postId]: (prevState[postId] || 0) + 1
    }));
  };

  const handleDecrement = (postId) => {
    setPostCounts((prevState) => {
      const currentCount = prevState[postId] || 0;
      return {
        ...prevState,
        [postId]: currentCount > 0 ? currentCount - 1 : 0
      };
    });
  };



  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <img src={post.photo} alt={post.title} className={styles.photo} />
          <div className={styles.content}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.description}</p>
            <div className={styles.actions}>
              <button
                className={styles.button}
                onClick={() => handleDecrement(post.id)}
              >
                -
              </button>
              <span className={styles.count}>{postCounts[post.id] || 0}</span>
              <button
                className={styles.button}
                onClick={() => handleIncrement(post.id)}
              >
                +
              </button>
              <button className={styles.price}>{`$${post.price}`}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostBox

