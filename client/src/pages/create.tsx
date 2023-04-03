import { CreatePost } from '@/components/CreatePost';
import { MainLayout } from '@/layout/MainLayout';
import React from 'react';

const NewPost = () => {
  return (
    <MainLayout hideLeft hideRight fullWidth>
      <CreatePost />
    </MainLayout>
  );
};

export default NewPost;
