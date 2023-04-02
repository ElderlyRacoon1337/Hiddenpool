import React from 'react';
import styles from './Post.module.scss';

export const Post = () => {
  return (
    <div className={styles.post}>
      <h1 className={styles.title}>
        Команда Darkside одержала победу над BetBoom
      </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit quia
        cupiditate quidem hic? Autem deserunt eligendi illo in est sint,
        blanditiis debitis voluptatem voluptate a adipisci, illum fugit sit
        reprehenderit.
      </p>
      <img
        className={styles.image}
        src="https://game-tournaments.com/media/news/n43904.jpeg"
        alt=""
      />
    </div>
  );
};
