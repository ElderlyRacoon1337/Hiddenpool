import { Button } from 'cutie-ui';
import { Header } from '../components/Header';
import { MainLayout } from '@/layout/MainLayout';
import { Post } from '@/components/Post';

export default function Home() {
  return (
    <MainLayout>
      <div className="posts pt-20px">
        <Post />
        <Post />
        <Post />
      </div>
    </MainLayout>
  );
}
