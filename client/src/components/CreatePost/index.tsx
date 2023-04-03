import React, { useState } from 'react';
import styles from './CreatePost.module.scss';
import clsx from 'clsx';
import { Button, Input } from 'cutie-ui';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('../../components/Editor').then((m) => m.Editor),
  {
    ssr: false,
  }
);

export const CreatePost = () => {
  const [blocks, setBlocks] = useState([]);
  return (
    <div className={clsx(styles.root, 'df fdc')}>
      <div className="flex">
        <Input
          className="fullWidth pl-5px"
          placeholder="Заголовок"
          variant="basic"
        />
        <Editor onChange={(arr: any) => setBlocks(arr)} />
      </div>
      <div className={clsx(styles.create__bottom)}>
        <Button variant="contained">Добавить</Button>
      </div>
    </div>
  );
};
