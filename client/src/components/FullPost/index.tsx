import React from 'react';
import styles from './FullPost.module.scss';
import clsx from 'clsx';
import { Avatar, Button, Icon, IconButton } from 'cutie-ui';
import { Comments } from './Comments';

export const FullPost = () => {
  return (
    <>
      <div className={clsx(styles.post)}>
        <div className={clsx(styles.post__container)}>
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
            quia cupiditate quidem hic? Autem deserunt eligendi illo in est
            sint, blanditiis debitis voluptatem voluptate a adipisci, illum
            fugit sit reprehenderit.
          </p>
          <img
            className={styles.image}
            src="https://game-tournaments.com/media/news/n43904.jpeg"
            alt=""
          />
          <p className={clsx(styles.text, 'fslg mt-20px')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            itaque perspiciatis cupiditate explicabo, praesentium voluptas cum
            autem quibusdam, quam voluptatum iure assumenda consequuntur veniam
            aperiam laudantium magni temporibus iusto accusamus. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Soluta ducimus sit ea
            ipsum doloremque, pariatur molestiae quos, sequi quibusdam quae
            dolor est illum harum nihil architecto repellat? Aut, voluptatum
            nisi.
          </p>
          <p className={clsx(styles.text, 'fslg mt-20px')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            itaque perspiciatis cupiditate explicabo, praesentium voluptas cum
            autem quibusdam, quam voluptatum iure assumenda consequuntur veniam
            aperiam laudantium magni temporibus iusto accusamus. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Soluta ducimus sit ea
            ipsum doloremque, pariatur molestiae quos, sequi quibusdam quae
            dolor est illum harum nihil architecto repellat? Aut, voluptatum
            nisi.
          </p>
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
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </Icon>
              </IconButton>
            </div>
          </div>
          <div
            className={
              (clsx(styles.post__bottom), 'df aic jcsb fslg fw-500 mt-20px')
            }
          >
            <div className="df aic">
              <Avatar
                src="https://www.gamersdecide.com/sites/default/files/lina_1.jpg"
                width={'2.5rem'}
                className="mr-10px"
                variant="rounded"
              />
              <p>Pavel Litov</p>
              <span
                className="ml-10px fssm"
                style={{ color: 'var(--success)' }}
              >
                +213
              </span>
            </div>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={
                <Icon fontSize={'1.2rem'}>
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
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                </Icon>
              }
            >
              Подписаться
            </Button>
          </div>
        </div>
      </div>
      <Comments />
    </>
  );
};
