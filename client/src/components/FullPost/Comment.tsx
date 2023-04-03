import clsx from 'clsx';
import { Avatar, Button, Icon, IconButton } from 'cutie-ui';
import React from 'react';
import styles from './FullPost.module.scss';

export const Comment = () => {
  return (
    <div className="mt-20px">
      <div className="df aic mb-10px">
        <Avatar
          src="https://www.gamersdecide.com/sites/default/files/lina_1.jpg"
          width={'1.8rem'}
          className="mr-10px"
          variant="rounded"
        />
        <div>
          <p className="mr-10px fw-500">Павел Литов</p>
          <p className="textSecondary fssm">6 часов назад</p>
        </div>
      </div>
      <p className={clsx(styles.text)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic in,
        tempore explicabo aperiam corporis similique, assumenda quibusdam saepe
        commodi veniam, sunt
      </p>
      <div className="df aic">
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
        <Button color="textSecondary">Ответить</Button>
        <IconButton color="textSecondary">
          <Icon fontSize={'1.3rem'}>
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
    </div>
  );
};
