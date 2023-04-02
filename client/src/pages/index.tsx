import { Button } from 'cutie-ui';
import { Header } from '../components/Header';
import { MainLayout } from '@/layout/MainLayout';
import { Post } from '@/components/Post';

export default function Home() {
  return (
    <>
      <Header />
      <MainLayout>
        <div className="mx-20px maxw-600px">
          <Post />
          <Post />
          <Post />
        </div>
      </MainLayout>
    </>
  );
}
