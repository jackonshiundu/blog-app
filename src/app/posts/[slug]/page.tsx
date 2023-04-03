import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../Components/RichTextComponents';

type Props = {
  params: {
    slug: string;
  };
};
export const revalidate = 60;
export async function generateStaticParams() {
  const query = groq`*[_type=='post']{
    slug
   }`;
  const slugs: Post[] = await client.fetch(query);
  const slugsRoutes = slugs.map((slug) => slug.slug.current);
  return slugsRoutes.map((slug) => ({
    slug: slug,
  }));
}

async function page({ params: { slug } }: Props) {
  const query = groq`*[_type=='post' && slug.current==$slug][0]{
  ...,
  author->,
  categories[]->
}`;
  const post: Post = await client.fetch(query, { slug });
  if (!post) return <h1>Loading Blogs...</h1>;

  return (
    <article>
      <section className="space-y0-2 border-[#2b6777] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="obect-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              fill
              alt={post.author.name}
            />
          </div>
          <section className="p-5 bg-[#2b6777] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-xl md:text-4xl font-extrabold">
                  {post.title}
                </h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-16 overflow-hidden  rounded-full">
                  <Image
                    className="object-cover "
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                  />
                </div>
                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div>{/* Author BIO */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <div key={category._id}>
                    {' '}
                    <p className="bg-gray-800 text-white px-3 py-1 w-fit rounded-full text-sm font-semibold mt-4">
                      {category.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default page;
//
