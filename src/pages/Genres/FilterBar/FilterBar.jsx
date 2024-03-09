// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect, useState } from 'react'
import { getGenres } from '../../../apiServices'
import { IoFilterCircle } from 'react-icons/io5'
import { MdInfo } from 'react-icons/md'
import clsx from 'clsx'

function FilterBar({ genreCurrent, setGenreCurrent, genres }) {


  return (
    <div className="">
      <div className="px-4 pb-3 flex items-center text-cmu-primary-500">
        <div className="text-lg mr-2 relative bottom-[1px]" >
          <IoFilterCircle />
        </div>
        <div className="text-xl font-bold uppercase">Bộ lọc</div>
      </div>
      <div className='border-t border-b border-[#e5e7eb] dark:border-[#262626] dark:text-gray-300'>
        <Swiper
          slidesPerView={'auto'}
          autoHeight={true}
        >
          {genres?.map((data, index) =>
            <SwiperSlide
              key={index}
              onClick={() => setGenreCurrent(data)}
              className={clsx('px-5 py-2 text-lg font-medium w-max cursor-pointer',
                genreCurrent.id === data.id && 'bg-cmu-primary-500 text-white')}
            >
              {data.name}
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className="bg-sky-400 dark:bg-sky-900 flex items-center text-white my-4 py-2 gap-2 rounded px-2">
        <div className="text-xl">
          <MdInfo />
        </div>
        <div className="text-lg font-semibold">{genreCurrent?.description}</div>
      </div>
    </div>
  )
}

export default FilterBar