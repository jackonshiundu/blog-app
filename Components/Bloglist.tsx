import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import urlFor from '../lib/urlFor';
import ClientsideRoute from './ClientsideRoute';

type Props = {
  posts: Post[];
};
function Bloglist({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#2b6777] mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-16 pb-24">
        {posts.map((post) => (
          <ClientsideRoute key={post._id} route={`/posts/${post.slug.current}`}>
            <div className="flex flex-col md:flex-row flex-wrap group cursor-pointer">
              <div className="relative w-full  mx-aut0 h-80 drop-shadow-lg group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                <img
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black background-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="flex  w-1/4 flex-col md:flex-row gay-y-2 md:gap-x-2 items-center">
                    {post.categories.map((categories, index) => (
                      <div
                        key={index}
                        className="bg-[#2b6777] w-full  text-center text-white px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        <p className="text-[10px] ">{categories.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
              </div>
              <p className="line-clamp-2 ">{post.description}</p>
              <p className="mt-5 font-bold flex items-center hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4" />
              </p>
            </div>
          </ClientsideRoute>
        ))}
      </div>
    </div>
  );
}

export default Bloglist;
