import React from 'react';
import styles from './Box.module.css';

const Box = ({ image, title, description, price }) => {
  return (
      <>
       <div className={styles.box}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}</p>
    </div>
      </>
  );
};

export default Box;