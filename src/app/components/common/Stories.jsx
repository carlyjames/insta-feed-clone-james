import React from 'react'

// stories data
import { Story } from '@/app/Data/Stories'

const Stories = () => {
  return (
    <div>
      {/* stories */}
      <div className='flex items-center lg:gap-4 gap-2 mx-1 p-4 w-full overflow-x-scroll no-scrollbar'>
        {
          Story.map((story, key) => (
            <div key={story.id} className='cursor-pointer flex flex-col items-center gap-2 w-full'>
              <div className='h-16 w-16 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 '>
                <img src={story.image} className='h-full w-full rounded-full object-cover border-2 border-white' alt={story.name} />
              </div>
              <h1 className='text-xs w-[60px] line-clamp-1'>{story.name}</h1>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Stories