// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { IoFilterCircle } from 'react-icons/io5'
import { MdInfo } from 'react-icons/md'
import { RxReset } from 'react-icons/rx'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { genresFiltersSlice } from './genresFiltersSlice'

function FilterBar() {
  const dispatch = useDispatch()
  const dataGenres = useSelector(state => state.genresFilters.dataGenres)
  const genreCurrent = useSelector(state => state.genresFilters.genreCurrent)
  const handleChangeGenresCurrent = (genreData) => {
    dispatch(genresFiltersSlice.actions.changeGenreCurrent(genreData))
  }

  const handleResetFilters = () => {
    dispatch(genresFiltersSlice.actions.resetGenresFilters())
  }

  return (
    <div className="">
      <div className="px-4 pb-3 flex items-center justify-between text-cmu-primary-500">
        <div className="flex items-center">
          <div className="text-lg mr-2 relative bottom-[1px]" >
            <IoFilterCircle />
          </div>
          <div className="text-xl font-bold uppercase">Bộ lọc</div>
        </div>

        <div
          onClick={handleResetFilters}
          className="flex items-center ml-auto border-[1.5px] gap-1 border-cmu-primary-500 text-base px-3 py-1 rounded-full hover:bg-cmu-primary-500 cursor-pointer
         duration-300 hover:text-white hover:ring-2 hover:ring-offset-2 hover:ring-offset-white dark:hover:ring-offset-[#18181b] hover:ring-cmu-primary-400"
        >
          <div className="relative bottom-[2px]" >
            <RxReset />
          </div>
          <div className="text-xs font-bold uppercase">Làm mới</div>
        </div>

      </div>
      <div className='border-t border-b border-[#e5e7eb] dark:border-[#262626] dark:text-gray-300'>
        {dataGenres ?
          (<Swiper
            slidesPerView={'auto'}
            autoHeight={true}
          >
            {dataGenres?.map((data, index) =>
              <SwiperSlide
                key={index}
                onClick={() => handleChangeGenresCurrent(data)}
                className={clsx('px-5 py-2 text-lg font-medium w-max cursor-pointer',
                  genreCurrent?.id === data.id && 'bg-cmu-primary-500 text-white')}
              >
                {data.name}
              </SwiperSlide>
            )}
          </Swiper>) :
          <div className="animate-pulse h-11 bg-[#ebebeb] dark:bg-[#202020]"></div>
        }
      </div>
      <div className="bg-sky-400 dark:bg-sky-900 flex items-center text-white my-4 min-h-11 py-2 gap-2 rounded px-2">
        <div className="text-xl">
          <MdInfo />
        </div>
        <div className="text-lg font-semibold">{genreCurrent?.description}</div>
      </div>
    </div>
  )
}

export default FilterBar
