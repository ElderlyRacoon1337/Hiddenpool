import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import { FullPost } from '@/components/FullPost';

const FullPostPage = () => {
  return (
    <MainLayout fullWidth>
      <FullPost />
    </MainLayout>
  );
};

export default FullPostPage;
