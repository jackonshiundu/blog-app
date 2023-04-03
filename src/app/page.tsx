import Image from 'next/image';
import { Inter } from 'next/font/google';
import { previewData } from 'next/headers';
import styles from './page.module.css';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import Bloglist from '../../Components/Bloglist';
const inter = Inter({ subsets: ['latin'] });

const query = groq`*[_type=='post']{
  ...,
  author->,
  categories[]->
}|order(_createdAt desc)`;
export const revalidate = 60;

export default async function Home() {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }
  const posts = await client.fetch(query);
  if (!posts) return <h1>Loading Blogs...</h1>;
  return (
    <div>
      <Bloglist posts={posts} />
    </div>
  );
}
