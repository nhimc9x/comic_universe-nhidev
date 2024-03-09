// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay } from 'swiper/modules'
import { useEffect, useState } from 'react'
import CardComic from '~/components/CardComic/CardComic'
import { BsFire } from 'react-icons/bs'
import SubHead from '~/components/SubHead/SubHead'
import { getTrendingComics } from '~/apiServices'
import { useDispatch, useSelector } from 'react-redux'
import { homeSlice } from '../homeSlice'

function Trending() {
  const dispatch = useDispatch()
  const dataTrendingCommicsSelector = useSelector(state => state.home.trendingCommics)

  const [trendingComics, setTrendingComics] = useState(Array.from({ length: 6 }))

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getTrendingComics(1)
      dispatch(homeSlice.actions.getTrendingComics(result.comics))
      setLoading(false)
    }
    if (!dataTrendingCommicsSelector) {
      fetchApi()
    } else {
      setLoading(false)
      setTrendingComics(dataTrendingCommicsSelector)
    }
  }, [dataTrendingCommicsSelector, dispatch])

  return (
    <div className='mb-10'>
      <SubHead title='Xu hướng' startIcon={<BsFire />} />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          960: {
            slidesPerView: 4,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 16
          }
        }}
        modules={[Autoplay]}
        className='mySwiper z-10'
      >

        {trendingComics?.map((data, index) => (
          <SwiperSlide key={index}>
            <CardComic loading={loading} thumbnail={data?.thumbnail} altImg={data?.id} lastChapter={data?.last_chapter?.name} title={data?.title} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default Trending