import React from 'react'

// stories data
import { Story } from '@/app/Data/Stories'

const Stories = () => {
  return (
    <div>
      {/* stories */}
      <div className='flex items-center gap-4 p-4'>
        {
          Story.map((story, key) => (
            <div key={story.id} className='cursor-pointer flex flex-col items-center gap-2'>
              <div className='h-16 w-16 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 '>
                <img src={story.image} className='h-full w-full rounded-full object-cover border-2 border-white' alt={story.name} />
              </div>
              <h1 className='text-xs'>{story.name}</h1>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Stories