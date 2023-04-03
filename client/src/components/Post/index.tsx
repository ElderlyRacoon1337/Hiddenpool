import React from 'react';
import styles from './Post.module.scss';
import clsx from 'clsx';
import { Avatar, Icon, IconButton } from 'cutie-ui';
import Link from 'next/link';

export const Post = () => {
  return (
    <Link href="/post/123">
      <div className={clsx(styles.post, 'maxw-650px')}>
        <div className={clsx(styles.post__header, 'df aic jcsb')}>
          <div className="df aic ">
            <Avatar
              src="https://www.gamersdecide.com/sites/default/files/lina_1.jpg"
              width={'1.5rem'}
              className="mr-10px"
              variant="rounded"
            />
            <p className="mr-10px">Павел Литов</p>
            <p className="textSecondary">6 часов назад</p>
          </div>
          <IconButton color="textPrimary">
            <Icon fontSize={'1.5rem'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Icon>
          </IconButton>
        </div>
        <h2 className={styles.title}>
          Команда Darkside одержала победу над BetBoom
        </h2>
        <p className={clsx(styles.text, 'fslg')}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          quia cupiditate quidem hic? Autem deserunt eligendi illo in est sint,
          blanditiis debitis voluptatem voluptate a adipisci, illum fugit sit
          reprehenderit.
        </p>
        <img
          className={styles.image}
          src="https://game-tournaments.com/media/news/n43904.jpeg"
          alt=""
        />
        <div className="df aic mt-10px">
          <div className="like df aic mr-10px">
            <IconButton color="textSecondary">
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Icon>
            </IconButton>
            12
          </div>
          <div className="comment df aic mr-10px">
            <IconButton color="textSecondary">
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </Icon>
            </IconButton>
            3
          </div>
          <div className="comment df aic mr-10px">
            <IconButton color="textSecondary">
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </Icon>
            </IconButton>
            1
          </div>
        </div>
      </div>
    </Link>
  );
};
