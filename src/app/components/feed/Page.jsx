"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Stories from '../common/Stories'
import { Ellipsis, BadgeCheck, Dot, Heart, MessageCircle, Send, Bookmark, Smile } from 'lucide-react';
import { Posts } from '@/app/Data/Posts';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
        <div className='lg:mx-6 lg:w-[70%] w-full border-b border-gray-200 mb-8' key={ind}>
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

                  {post.following === false && <Dot className='text-gray-500' size={26} />}
                  {post.following === false && <p className="text-blue-400 font-semibold text-sm cursor-pointer hover:text-black">Follow</p>}

                </div>
              </div>
              <Ellipsis size={24} />
            </div>
            {/* post content */}
            <div className='flex flex-col items-start w-full gap-1'>
              <Image src={post.image} height={300} width={600} className="h-full w-full rounded-lg object-cover " alt="profile" />
              {/* post actions */}
              <div className='flex justify-between items-start w-full gap-3 mt-2'>
                <div className='flex gap-3'>
                  <div className='flex items-center gap-1'>
                    <Heart className={`cursor-pointer ${likedPosts[ind] ? 'text-red-500 fill-red-500' : 'hover:text-gray-500'}`} size={26} onClick={() => toggleLike(ind)} />
                    <p className='lg:hidden block'>{post.likes}</p>
                  </div>
                  <Dialog className='overflow-y-scroll no-scrollbar w-full'>
                    <div className='flex items-center gap-1 lg:w-[80%]'>
                      <DialogTrigger asChild>
                        <MessageCircle className='hover:text-gray-500 cursor-pointer' size={26} />
                      </DialogTrigger>
                      <DialogContent className='lg:w-[70vw] max-w-full h-full'>
                        <DialogTitle className='hidden'>{''}</DialogTitle>
                        <div className='h-full flex w-full '>
                          <Image src={post.image} height={100} width={100} className="lg:block hidden h-[500px] w-[300px] rounded-l-lg object-cover " alt="post-image" />
                          <div className='flex flex-col gap-2 p-4 h-full w-full overflow-y-scroll no-scrollbar'>
                            {/* post account */}
                            <div className='flex items-center gap-2 sticky top-0 pt-4 border-b pb-2'>
                              <div className="h-12 w-12 rounded-full  ">
                                <Image src={post.image} height={100} width={100} className="h-full w-full rounded-full object-cover " alt="profile" />
                              </div>
                              <div className='flex items-start'>
                                <div className='flex flex-col'>
                                  <h1 className="text-sm">{post.name}</h1>
                                  <h2 className="text-gray-500 text-xs">{post.caption}</h2>
                                </div>
                                {post.following === false && <Dot className='text-gray-500' size={26} />}
                                {post.following === false && <p className="text-blue-400 font-semibold text-sm cursor-pointer hover:text-black">Follow</p>}
                              </div>
                            </div>
                            {/* post comments */}
                            <div className='flex flex-col gap-6 mt-4 h-full w-full  overflow-y-scroll no-scrollbar'>
                              {post.comments.map((comment, ind) => (
                                <div className='flex gap-2 w-full' key={ind}>
                                  <div className="h-10 w-10 rounded-full  ">
                                    <Image src={post.image} height={100} width={100} className="h-full w-full rounded-full object-cover " alt="profile" />
                                  </div>
                                  <div className='flex flex-col gap-1 items-start' >
                                    <div className='flex  items-center gap-2'>
                                      <h1 className="text-sm">{comment.username}</h1>
                                      <h2 className="text-gray-500 text-xs">{comment.text}</h2>
                                    </div>
                                    {/* post metrics */}
                                    <div className='flex text-sm text-gray-500 gap-4'>
                                      <p className='cursor-pointer hover:text-black'>{post.postAge}</p>
                                      <p className='cursor-pointer hover:text-black'>{post.likes} Likes</p>
                                      <p className='cursor-pointer hover:text-black'>Reply</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                            {/* post actions */}
                            <div className='flex flex-col w-full gap-2 mt-4 sticky bottom-0'>
                              <div className='flex items-start justify-between lg:block hidden'>
                                <div className='flex gap-2 items-center'>
                                  <Heart />
                                  <MessageCircle />
                                  <Send />
                                </div>
                                <Bookmark />
                              </div>
                              <p className='text-xs text-gray-500  lg:block hidden'>December 1, 2024</p>
                              <div className='h-[1px] w-full bg-gray-500'></div>
                              <div className='flex items-center gap-2'>
                                <Smile size={24} />
                                <textarea type="text" placeholder="Add a comment..." className='w-full border-none outline-none text-sm' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                      {/* <p className='lg:hidden block'>{post.commentCount}</p> */}
                    </div>
                  </Dialog>
                  {/* <Send className='hover:text-gray-500 cursor-pointer'  /> */}
                </div>
                <Bookmark className='hover:text-gray-500 cursor-pointer' size={26} />
              </div>
              {/* likes and comments */}
              <div className='flex w-full gap-2 items-center w-full text-sm'>
                <h1>{post.username}</h1>
                <p className='line-clamp-1'>{post.caption}</p>
              </div>
              <div className='flex flex-col gap-2 text-gray-500 text-sm hidden lg:block'>
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