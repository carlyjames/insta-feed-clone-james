"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Stories from '../common/Stories'
import { Ellipsis, BadgeCheck, Dot, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { Posts } from '@/app/Data/Posts';

const Page = () => {
  const [likedPosts, setLikedPosts] = useState({});

  // Function to toggle like status for a specific post
  const toggleLike = (postIndex) => {
    setLikedPosts(prev => ({
      ...prev,
      [postIndex]: !prev[postIndex]
    }));
  };

  return (
    <section className="lg:w-[60%] overflow-y-scroll no-scrollbar h-screen">
      {/* stories Nav */}
      <Stories />
      {/* posts */}

      {/* single post card */}
      {Posts.map((post, ind) => (
        <div className='lg:mx-6 lg:w-[70%] w-full border-b border-gray-200' key={ind}>
          {/* profile details */}
          <div className="flex flex-col items-start w-full gap-3 p-4">
            {/* profile */}
            <div className="flex items-center justify-between w-full gap-2">
              <div className='flex items-center gap-2'>                
                <div className="h-12 w-12 rounded-full  ">
                  <Image src={post.image} height={100} width={100} className="h-full w-full rounded-full object-cover " alt="profile" />
                </div>
                <div className='flex items-start'>
                  <div className='flex flex-col'>
                    <h1 className="text-sm">{post.name}</h1>
                    <h2 className="text-gray-500 text-sm">{post.username}</h2>
                  </div>
                  <Dot className='text-gray-500' size={26} />
                  <p className='text-sm font-semibold '>{post.postAge}</p>
                  
                  {post.following === false && <Dot className='text-gray-500' size={26} />  }
                  {post.following === false && <p className="text-blue-400 font-semibold text-sm cursor-pointer hover:text-black">Follow</p> }
                  
                </div>
              </div>
              <Ellipsis size={24} />
            </div>
            {/* post content */}
            <div className='flex flex-col items-start w-full gap-1'>
              <Image src={post.image} height={300} width={600} className="h-full w-full rounded-lg object-cover " alt="profile" />
              {/* post actions */}
              <div className='flex justify-between items-start w-full gap-3 mt-2'>
                <div className='flex items-center gap-3'>
                  <Heart  className={`cursor-pointer ${likedPosts[ind] ? 'text-red-500 fill-red-500' : 'hover:text-gray-500'}`}  size={26}  onClick={() => toggleLike(ind)} />
                  <MessageCircle className='hover:text-gray-500 cursor-pointer' size={26} />
                  <Send className='hover:text-gray-500 cursor-pointer' size={26} />
                </div>
                <Bookmark className='hover:text-gray-500 cursor-pointer' size={26} />
              </div>
              {/* likes and comments */}
              <div className='flex w-full gap-2 items-center w-full text-sm'>
                <h1>{post.username}</h1>
                <p className='line-clamp-1'>{post.caption}</p>
              </div>
              <div className='flex flex-col gap-2 text-gray-500 text-sm'>
                <p className='cursor-pointer'>View all {post.commentCount} comments</p>
                <p>Add a comment...</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Page